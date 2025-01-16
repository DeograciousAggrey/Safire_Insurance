import {
    IExecOracleFactory,
    IExecOracleReader,
    utils,
} from "@iexec/iexec-oracle-factory-wrapper";

import { type RawParams } from '@iexec/iexec-oracle-factory-wrapper';

import {
    getOutput,
    formatObservableData,
    formatObservableError,
    setInitError,
} from "./helpers.js";

type DataType = "string" | "number" | "boolean";

const init = async () => {
    try {
        let ethProvider;

        if (window.ethereum) {
            console.log("using default provider window.ethereum");
            ethProvider = window.ethereum;
        } else {
            throw Error(
                "Missing injected web3 provider.\nImportant - Please install a web3 wallet like Metamask to continue."
            );
        }

        const oracleFactory = new IExecOracleFactory(ethProvider, {
            workerpool: "prod-v8-learn.main.pools.iexec.eth",
        });

        const addClickListener = (id: string, callback: (event: Event) => void) => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener("click", callback);
            } else {
                console.error(`Element with ID ${id} not found.`);
            }
        };

        const isHttpMethod = (method: string): method is "GET" | "POST" | "PUT" | "DELETE" => {
            return ["GET", "POST", "PUT", "DELETE"].includes(method);
        };

        const isDataType = (dataType: string): dataType is DataType => {
            return ["string", "number", "boolean"].includes(dataType);
        };

        addClickListener("test-params-button", async () => {
            const out = getOutput("test-params-out");

            try {
                const method = (document.getElementById("test-params-method-input") as HTMLInputElement)?.value || "";
                if (!isHttpMethod(method)) {
                    throw new Error(`Invalid HTTP method: ${method}`);
                }

                const dataType = (document.getElementById("test-params-datatype-input") as HTMLInputElement)?.value || "";
                if (!isDataType(dataType)) {
                    throw new Error(`Invalid data type: ${dataType}`);
                }

                const rawParams = {
                    apiKey: (document.getElementById("test-params-apikey-input") as HTMLInputElement)?.value || "",
                    url: (document.getElementById("test-params-url-input") as HTMLInputElement)?.value || "",
                    method,
                    body: (document.getElementById("test-params-body-input") as HTMLInputElement)?.value || "",
                    JSONPath: (document.getElementById("test-params-jsonpath-input") as HTMLInputElement)?.value || "",
                    dataType,
                    headers:
                        (document.getElementById("test-params-headers-input") as HTMLInputElement)?.value &&
                            typeof (document.getElementById("test-params-headers-input") as HTMLInputElement).value === 'string' ?
                            JSON.parse((document.getElementById("test-params-headers-input") as HTMLInputElement).value) :
                            {},
                };

                const res = await utils.testRawParams(rawParams);
                out.success(res.toString());
            } catch (e) {
                const error = e as Error;
                out.error(error.toString());
            }
        });

        addClickListener("create-oracle-button", () => {
            const out = getOutput("create-oracle-out");

            try {
                const method = (document.getElementById("create-oracle-method-input") as HTMLInputElement)?.value || "";
                if (!isHttpMethod(method)) {
                    throw new Error(`Invalid HTTP method: ${method}`);
                }

                const dataType = (document.getElementById("create-oracle-datatype-input") as HTMLInputElement)?.value || "";
                if (!isDataType(dataType)) {
                    throw new Error(`Invalid data type: ${dataType}`);
                }

                const rawParams = {
                    apiKey: (document.getElementById("create-oracle-apikey-input") as HTMLInputElement)?.value || "",
                    url: (document.getElementById("create-oracle-url-input") as HTMLInputElement)?.value || "",
                    method,
                    body: (document.getElementById("create-oracle-body-input") as HTMLInputElement)?.value || "",
                    JSONPath: (document.getElementById("create-oracle-jsonpath-input") as HTMLInputElement)?.value || "",
                    dataType,
                    headers:
                        (document.getElementById("create-oracle-headers-input") as HTMLInputElement)?.value &&
                            typeof (document.getElementById("create-oracle-headers-input") as HTMLInputElement).value === 'string' ?
                            JSON.parse((document.getElementById("create-oracle-headers-input") as HTMLInputElement).value) :
                            {},
                };

                oracleFactory.createOracle(rawParams).subscribe({
                    error: (e) => {
                        const error = e as Error;
                        out.error(formatObservableError(error));
                    },
                    next: (data) => {
                        out.info(formatObservableData(data));
                    },
                    complete: () => {
                        out.success("COMPLETE");
                    },
                });
            } catch (e) {
                const error = e as Error;
                out.error(error.toString());
            }
        });

        addClickListener("update-oracle-from-params-button", () => {
            const out = getOutput("update-oracle-from-params-out");

            try {
                const method = (document.getElementById("update-oracle-from-params-method-input") as HTMLInputElement)?.value || "";
                if (!isHttpMethod(method)) {
                    throw new Error(`Invalid HTTP method: ${method}`);
                }

                const dataType = (document.getElementById("update-oracle-from-params-datatype-input") as HTMLInputElement)?.value || "";
                if (!isDataType(dataType)) {
                    throw new Error(`Invalid data type: ${dataType}`);
                }

                const paramSet = {
                    dataset: (document.getElementById("update-oracle-from-params-dataset-input") as HTMLInputElement)?.value || "",
                    url: (document.getElementById("update-oracle-from-params-url-input") as HTMLInputElement)?.value || "",
                    method,
                    body: (document.getElementById("update-oracle-from-params-body-input") as HTMLInputElement)?.value || "",
                    JSONPath: (document.getElementById("update-oracle-from-params-jsonpath-input") as HTMLInputElement)?.value || "",
                    dataType,
                    headers:
                        (document.getElementById("update-oracle-from-params-headers-input") as HTMLInputElement)?.value &&
                            typeof (document.getElementById("update-oracle-from-params-headers-input") as HTMLInputElement).value === 'string' ?
                            JSON.parse((document.getElementById("update-oracle-from-params-headers-input") as HTMLInputElement).value) :
                            {},
                };

                oracleFactory.updateOracle(paramSet).subscribe({
                    error: (e) => {
                        const error = e as Error;
                        out.error(formatObservableError(error));
                    },
                    next: (data) => {
                        out.info(formatObservableData(data));
                    },
                    complete: () => {
                        out.success("COMPLETE");
                    },
                });
            } catch (e) {
                const error = e as Error;
                out.error(error.toString());
            }
        });

        addClickListener("update-oracle-from-cid-button", () => {
            const out = getOutput("update-oracle-from-cid-out");

            try {
                const paramSetCid = (document.getElementById("update-oracle-from-cid-cid-input") as HTMLInputElement)?.value || "";

                oracleFactory.updateOracle(paramSetCid).subscribe({
                    error: (e) => {
                        const error = e as Error;
                        out.error(formatObservableError(error));
                    },
                    next: (data) => {
                        out.info(formatObservableData(data));
                    },
                    complete: () => {
                        out.success("COMPLETE");
                    },
                });
            } catch (e) {
                const error = e as Error;
                out.error(error.toString());
            }
        });

        addClickListener("update-oracle-x-chain-button", () => {
            const out = getOutput("update-oracle-x-chain-out");

            try {
                const paramSetCid = (document.getElementById("update-oracle-x-chain-cid-input") as HTMLInputElement)?.value || "";

                const targetBlockchains = (document.getElementById("update-oracle-x-chain-target-input") as HTMLInputElement)?.value || "";

                oracleFactory
                    .updateOracle(paramSetCid, {
                        targetBlockchains: typeof targetBlockchains === 'string' ? JSON.parse(targetBlockchains) : [],
                    })
                    .subscribe({
                        error: (e) => {
                            const error = e as Error;
                            out.error(formatObservableError(error));
                        },
                        next: (data) => {
                            out.info(formatObservableData(data));
                        },
                        complete: () => {
                            out.success("COMPLETE");
                        },
                    });
            } catch (e) {
                const error = e as Error;
                out.error(error.toString());
            }
        });

        addClickListener("read-oracle-from-params-button", async () => {
            const out = getOutput("read-oracle-from-params-out");

            try {
                const method = (document.getElementById("read-oracle-from-params-method-input") as HTMLInputElement)?.value || "";
                if (!isHttpMethod(method)) {
                    throw new Error(`Invalid HTTP method: ${method}`);
                }

                const dataType = (document.getElementById("read-oracle-from-params-datatype-input") as HTMLInputElement)?.value || "";
                if (!isDataType(dataType)) {
                    throw new Error(`Invalid data type: ${dataType}`);
                }

                const paramSet = {
                    dataset: (document.getElementById("read-oracle-from-params-dataset-input") as HTMLInputElement)?.value || "",
                    url: (document.getElementById("read-oracle-from-params-url-input") as HTMLInputElement)?.value || "",
                    method,
                    body: (document.getElementById("read-oracle-from-params-body-input") as HTMLInputElement)?.value || "",
                    JSONPath: (document.getElementById("read-oracle-from-params-jsonpath-input") as HTMLInputElement)?.value || "",
                    dataType,
                    headers:
                        (document.getElementById("read-oracle-from-params-headers-input") as HTMLInputElement)?.value &&
                            typeof (document.getElementById("read-oracle-from-params-headers-input") as HTMLInputElement).value === 'string' ?
                            JSON.parse((document.getElementById("read-oracle-from-params-headers-input") as HTMLInputElement).value) :
                            {},
                };

                const res = await oracleFactory.readOracle(paramSet);
                out.success(JSON.stringify(res));
            } catch (e) {
                const error = e as Error;
                out.error(error.toString());
            }
        });

        addClickListener("read-oracle-from-cid-button", async () => {
            const out = getOutput("read-oracle-from-cid-out");

            try {
                const paramSetCid = (document.getElementById("read-oracle-from-cid-cid-input") as HTMLInputElement)?.value || "";

                const res = await oracleFactory.readOracle(paramSetCid);
                out.success(JSON.stringify(res));
            } catch (e) {
                const error = e as Error;
                out.error(error.toString());
            }
        });

        addClickListener("read-oracle-from-oracleid-button", async () => {
            const out = getOutput("read-oracle-from-oracleid-out");

            try {
                const oracleId = (document.getElementById("read-oracle-from-oracleid-oracleid-input") as HTMLInputElement)?.value || "";

                const dataType = (document.getElementById("read-oracle-from-oracleid-datatype-input") as HTMLInputElement)?.value || "";
                if (!isDataType(dataType)) {
                    throw new Error(`Invalid data type: ${dataType}`);
                }

                const res = await oracleFactory.readOracle(oracleId, { dataType });
                out.success(JSON.stringify(res));
            } catch (e) {
                const error = e as Error;
                out.error(error.toString());
            }
        });

        addClickListener("read-x-chain-oracle-from-oracleid-button", async () => {
            const out = getOutput("read-x-chain-oracle-from-oracleid-out");

            try {
                const provider = (document.getElementById("read-x-chain-oracle-from-oracleid-provider-input") as HTMLInputElement)?.value || "";

                const oracleId = (document.getElementById("read-x-chain-oracle-from-oracleid-oracleid-input") as HTMLInputElement)?.value || "";

                const dataType = (document.getElementById("read-x-chain-oracle-from-oracleid-datatype-input") as HTMLInputElement)?.value || "";
                if (!isDataType(dataType)) {
                    throw new Error(`Invalid data type: ${dataType}`);
                }

                const oracleReader = provider
                    ? new IExecOracleReader(provider)
                    : oracleFactory;

                const res = await oracleReader.readOracle(oracleId, { dataType });
                out.success(JSON.stringify(res));
            } catch (e) {
                const error = e as Error;
                out.error(error.toString());
            }
        });

        console.log("initialized");
    } catch (e) {
        const error = e as Error;
        console.log("failed to initialize", error);
        setInitError(`Failed to initialize: ${error.message}`);
    }
};

init();
