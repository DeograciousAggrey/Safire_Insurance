import React, { useCallback, useEffect, useMemo, useState } from "react";
import { columns } from "@/constants/mockTableData";
import { formatDecimal } from "@/utils/formatNumber";
import PercentageBar from "../Slide/PercentageBar";
import { SafireSelcet } from "./SafireSelect";
import { Button, useDisclosure } from "@nextui-org/react";
import { StarIconSolid } from "../../../public/icons/StarIconSolid";
import { StarIcon } from "@heroicons/react/24/outline";
import { useFavoriteStore } from "@/store/favorite/favorite.store";
import StakeModal from "../Modal/StakeModal";
import { tabSelect } from "@/constants/select.constant";
import TimeRemine from "../TimeRemine/timeRemine";
import { Search } from "../Search/search";
import { useInsurances } from "@/hooks/insurance.hook";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/utils/firebaseStorage";
import { useWalletStore } from "@/store/wallet/wallet.store";
import { InsuranceType } from "@/store/insurance/insurance.type";
import { ethers } from "ethers";
import TooltipWarning from "../Tooltip/TooltipWarning";
import NotiIcon from "../Icon/NotiIcon";
import { CHAINS } from "@/constants/chain.constant";

export default function SafireTable() {
  const [filter, setFilter] = useState("Ongoing");
  const { insurances: insuranceList, fetchInsurances } = useInsurances(
    100,
    0,
    filter
  );

  const { currentChainId } = useWalletStore();
  const { favorites, addFavorite, removeFavorite } = useFavoriteStore();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [search, setSearch] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedInsurance = insuranceList ? insuranceList[selectedIndex] : null;

  const getDownloadURLWithBackup = useCallback(
    async (chainId: string, address: string) => {
      try {
        return await getDownloadURL(
          ref(storage, `files/${chainId}-${address}.png`)
        );
      } catch (e) {
        return `/insurances/AIA.png`;
      }
    },
    []
  );

  useEffect(() => {
    fetchInsurances();
  }, [filter, fetchInsurances]);

  useEffect(() => {
    const promises = insuranceList.map((insurance) =>
      getDownloadURLWithBackup(currentChainId, insurance.id)
    );
    Promise.all(promises).then((result) => setImageUrls(result));
  }, [insuranceList, currentChainId, getDownloadURLWithBackup]);

  const data = useMemo(() => {
    if (search) {
      const filtered = insuranceList.filter(
        (obj: InsuranceType) =>
          obj.name.toLowerCase().includes(search.toLowerCase()) ||
          obj.symbol.toLowerCase().includes(search.toLowerCase())
      );
      return filtered;
    }
    return insuranceList;
  }, [search, insuranceList]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onOpen();
  };

  const renderFavorite = (id: string) => {
    if (favorites.find((item) => item.id === id)) {
      return <StarIconSolid />;
    } else {
      return <StarIcon width={24} />;
    }
  };

  const handleFavorite = (insurance: InsuranceType) => {
    if (!favorites.includes(insurance)) {
      addFavorite(insurance);
    } else {
      removeFavorite(insurance);
    }
  };

  const getSellerShare = (index: number) => {
    const insurance = insuranceList[index];
    return Number(ethers.utils.formatEther(insurance.sellerShares));
  };

  const getBuyerShare = (index: number) => {
    const insurance = insuranceList[index];
    return Number(ethers.utils.formatEther(insurance.buyerShares));
  };

  const getMultiplier = (index: number) => {
    const insurance = insuranceList[index];
    return Number(
      ethers.utils.formatUnits(
        insurance.multiplier,
        insurance.multiplierDecimals
      )
    );
  };

  const getTotalValue = (index: number) => {
    const insurance = insuranceList[index];
    return Number(
      ethers.utils.formatUnits(
        insurance.totalShares,
        insurance.underlyingToken.decimals
      )
    );
  };

  const getUtilization = (index: number) => {
    const sellerShare = getSellerShare(index);
    const buyerShare = getBuyerShare(index);
    const multiplier = getMultiplier(index);
    if (sellerShare === 0) return 0;
    return ((buyerShare * multiplier) / sellerShare) * 100;
  };

  return (
    <div className="bg-white w-full mt-5 rounded-xl">
      <div className="flex items-center justify-between p-4">
        <div>
          <SafireSelcet
            tabSelect={tabSelect}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <Search search={search} setSearch={setSearch} />
      </div>
      <table className="table-auto w-full">
        <thead className="bg-gray-100 text-gray-600 h-14 font-bold  text-xs text-center uppercase">
          <tr>
            <td width="6%" className="pl-5">
              <span className="hidden">Favorite</span>
            </td>
            {columns.map((column) => (
              <td
                key={column.field}
                width={column.width}
                className={`${column.field === "expiration" ? "text-center" : "text-start"
                  }`}
              >
                {column.headerName === "Utilization" ? (
                  <div className="flex">
                    <div className="my-auto">{column.headerName}</div>
                    <TooltipWarning
                      description={`Utilization reflects how much liquidity is allocated by buyers. It can be calculated as "buyer * multiplier / seller"`}
                    >
                      <div className=" ml-1 cursor-pointer">
                        <NotiIcon color="#565762" />
                      </div>
                    </TooltipWarning>
                  </div>
                ) : (
                  <div>{column.headerName}</div>
                )}
              </td>
            ))}
            <td width="" className="text-center">
              Action
            </td>
          </tr>
        </thead>
        <tbody className="text-center">
          {data?.length
            ? data
              .sort((a: InsuranceType, b: InsuranceType) => {
                return b.createdAt - a.createdAt;
              })
              .map((item: InsuranceType, index: number) => (
                <tr
                  key={index}
                  className={`${index !== data.length - 1 && `border-b `
                    } h-[95px] text-gray-600 rounded-none hover:bg-gray-50`}
                >
                  <td>
                    <div
                      className="flex w-full justify-center items-center"
                      onClick={() => {
                        handleFavorite(item);
                      }}
                    >
                      {renderFavorite(item.id)}
                    </div>
                  </td>
                  <td className="text-start">
                    <a href={`${CHAINS[currentChainId]?.blockExplorerUrls}/address/${item.condition}`} target="_blank">
                      <div className="flex">
                        <picture className="flex items-center">
                          <img
                            src={imageUrls[index] || "/insurances/AIA.png"}
                            width="36px"
                            height="36px"
                            className="rounded-full"
                            alt="logo-chain"
                          />
                        </picture>
                        <div className="text-start ml-2">
                          <div className="text-sm font-semibold  text-[#0F1419]">
                            {item.name}
                          </div>
                          <div className="max-w-[30px] text-[10px] bg-[#E5E5E6] rounded text-center py-[2px]">
                            {item.symbol}
                          </div>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td className="text-start">
                    <div className="flex">
                      <picture>
                        <img
                          src={`/tokens/${item.underlyingToken.symbol}.png`}
                          width="36px"
                          height="36px"
                          className="rounded-full"
                          alt="logo-chain"
                        />
                      </picture>
                      <div className="text-start ml-2">
                        <div className="text-sm font-semibold">
                          {item.underlyingToken.name}
                        </div>
                        <div className="max-w-[30px] text-[12px] text-[#A3A3A3] text-start">
                          {item.underlyingToken.symbol}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-start  text-[#0F1419]">
                    {getMultiplier(index)}x
                  </td>
                  <td className="text-start">
                    <PercentageBar
                      utilization={getUtilization(index)}
                      totalBuyer={getBuyerShare(index)}
                      totalSeller={getSellerShare(index)}
                    />
                  </td>
                  <td className="text-start  text-[#0F1419] text-sm">
                    {formatDecimal(getTotalValue(index))} {item.underlyingToken.symbol}
                  </td>
                  <td>
                    <div className="flex flex-col justify-center items-center my-auto ">
                      <TimeRemine timeData={item.maturityTime} />
                    </div>
                  </td>
                  <td className="text-start px-4">
                    <Button
                      color="primary"
                      className=" px-4"
                      isDisabled={filter !== "Ongoing"}
                      onClick={() => handleSelect(index)}
                    >
                      Buy
                    </Button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {selectedInsurance && (
        <StakeModal
          isOpen={isOpen}
          insurance={selectedInsurance}
          header="Buy"
          onOpenChange={onOpenChange}
          onInsuranceUpdate={fetchInsurances}
          onClose={onClose}
        />
      )}
    </div>
  );
}
