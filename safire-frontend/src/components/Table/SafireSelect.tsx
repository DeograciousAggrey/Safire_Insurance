import React, { Dispatch } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

interface SafireSelectProps {
  tabSelect: Array<any>;
  filter: string;
  setFilter: (filter: string) => void;
}

export function SafireSelcet({
  tabSelect,
  filter,
  setFilter,
}: SafireSelectProps) {
  return (
    <div className="bg-gray-100 rounded-lg flex items-center  p-[1px] space-x-3">
      <Tabs value={filter}>
        <TabsHeader>
          {tabSelect.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => {
                setFilter(value);
              }}
            >
              <div className="flex items-center gap-2 text-[#565762]">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </div>
  );
}
