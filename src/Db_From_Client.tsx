import * as React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { BillData, Rates, Stock, viewBills } from './Pages/BillData';

const PORT = 3000;

const isLocal = true;



class LocalService {

    static stocks: Stock[] = []
    static stockNamesColl: string[] = []

    static rates: Rates
    static billData: BillData

    static billDataColl: BillData[] = []

    static viewBillUsingNameColl: viewBills[] = []
    static viewBillUsingInvoiceNoColl: viewBills[] = []
    static viewBillUsingphoneNoColl: viewBills[] = []
    static viewBillUsingDateColl: viewBills[] = []

    public static getStockNames(): string[] {
        (LocalService.stocks).map(items => {
            LocalService.stockNamesColl.push(items.Name)
        })
        return LocalService.stockNamesColl
    }

    public static updatingRate(ratesIn: Rates) {
        console.log("Updating rate: " + ratesIn.Gold_Rate)
        LocalService.rates = ratesIn
    }

    public static getRateUpdates(): Rates {
        console.log("getting rate: " + LocalService.rates)
        return LocalService.rates
    }

    public static addStock(stock: Stock) {
        LocalService.stocks.push(stock)
    }

    public static getStockHistoryFn(stockName: string): Stock[] {

        var stockHistory: Stock[] = []
        console.log("LocalService getStockHistoryFn: ");
        console.log("All stocks in  LocalService: ", this.stocks);
        console.log("Stock Name: ", stockName);
        (this.stocks).map((item) => {
            if (item.Name === stockName) {
                stockHistory.push(item)
            }
            // Object.keys(item).forEach((key) => {
            //     if (key === stockName) {
            //         LocalService.stockHistory.push(item)
            //     }
            // });
        })
        return stockHistory
    }
    public static getStockReportFn(stockName: string): Stock[] {
        var stockReport: Stock[] = [];
        (this.stocks).map((item) => {
            if (item.Name === stockName) {
                stockReport.push(item)
            }
        })

        return stockReport
    }
    public static saveBillData(billDataIn: BillData) {
        console.log("saveBillData: " + billDataIn)
        LocalService.billDataColl.push(billDataIn)
    }

    public static viewBillUsingName(name: String): viewBills[] {
        (LocalService.billDataColl).map((eachBill: BillData) => {
            if (eachBill.Name == name) {
                const viewBillUsingNameObj: viewBills = {
                    id: 234,
                    name: eachBill.Name,
                    phoneNo: eachBill.Phone,
                    invoiceNo: eachBill.Invoice_No,
                    date: eachBill.Date,
                    address: eachBill.Address,
                    goldWeight: eachBill.Gold_Rate,
                    silverWeight: eachBill.Silver_Rate,
                    oldItemWeight: eachBill.Old_Gold_Total_Weight,
                    discount: eachBill.Discount,
                    billAmount: eachBill.Total
                }
                LocalService.viewBillUsingNameColl.push(viewBillUsingNameObj)
            }
        })
        return LocalService.viewBillUsingNameColl
    }
    public static viewBillUsingInvoice(invoiceNo: string): viewBills[] {
        (LocalService.billDataColl).map((eachBill: BillData) => {
            if (eachBill.Invoice_No == invoiceNo) {
                const viewBillUsingInvoiceNoObj: viewBills = {
                    id: 235,
                    name: eachBill.Name,
                    phoneNo: eachBill.Phone,
                    invoiceNo: eachBill.Invoice_No,
                    date: eachBill.Date,
                    address: eachBill.Address,
                    goldWeight: eachBill.Gold_Rate,
                    silverWeight: eachBill.Silver_Rate,
                    oldItemWeight: eachBill.Old_Gold_Total_Weight,
                    discount: eachBill.Discount,
                    billAmount: eachBill.Total
                }
                LocalService.viewBillUsingInvoiceNoColl.push(viewBillUsingInvoiceNoObj)
            }
        })
        return LocalService.viewBillUsingInvoiceNoColl
    }
    public static viewBillUsingPhone(phoneNo: string): viewBills[] {
        (LocalService.billDataColl).map((eachBill: BillData) => {
            if (eachBill.Phone === phoneNo) {
                const viewBillUsingphoneNoObj: viewBills = {
                    id: 236,
                    name: eachBill.Name,
                    phoneNo: eachBill.Phone,
                    invoiceNo: eachBill.Invoice_No,
                    date: eachBill.Date,
                    address: eachBill.Address,
                    goldWeight: eachBill.Gold_Rate,
                    silverWeight: eachBill.Silver_Rate,
                    oldItemWeight: eachBill.Old_Gold_Total_Weight,
                    discount: eachBill.Discount,
                    billAmount: eachBill.Total
                }
                LocalService.viewBillUsingphoneNoColl.push(viewBillUsingphoneNoObj)
            }
        })
        return LocalService.viewBillUsingphoneNoColl
    }
    public static viewBillUsingDates(dateFrom: string, dateTo: string): viewBills[] {
        (LocalService.billDataColl).map((eachBill: BillData) => {
            if(eachBill.Date !== undefined)
                {
            if (eachBill.Date >= dateFrom && eachBill.Date <= dateTo) {
                const viewBillUsingDateObj: viewBills = {
                    id: 237,
                    name: eachBill.Name,
                    phoneNo: eachBill.Phone,
                    invoiceNo: eachBill.Invoice_No,
                    date: eachBill.Date,
                    address: eachBill.Address,
                    goldWeight: eachBill.Gold_Rate,
                    silverWeight: eachBill.Silver_Rate,
                    oldItemWeight: eachBill.Old_Gold_Total_Weight,
                    discount: eachBill.Discount,
                    billAmount: eachBill.Total
                }
                LocalService.viewBillUsingDateColl.push(viewBillUsingDateObj)
            }}
        })
        return LocalService.viewBillUsingDateColl
    }
}


class HttpService {
    public static getStockNames(): string[] {

        var arr: string[] = []
        // var prom = await axios.get(`http://localhost:${PORT}/GetStocks`)
        // // prom. then((response) => {
        // //     (response.data).forEach((data: any) => {
        // //         arr.push(data.Name)
        // //         return arr
        // //     })
        // // })

        return arr;
    }

    public static updatingRate(ratesIn: Rates) {

        var arr: Rates = ratesIn

        // console.log("inside updatingRateBtn.....")

        // axios.put(`http://localhost:${PORT}/AddRateUpdates`, {
        //     Gold_Rate: goldRate,
        //     Silver_Rate: silverRate
        // })
        //     .then((response) => {
        //         console.log('Data posted:', response.data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });

    }

    public static getRateUpdates(): Rates {

        var arr: Rates = { Gold_Rate: 7000, Silver_Rate: 700 }
        // console.log("getRateUpdates")
        // axios.get(`http://localhost:${PORT}/GetRates`).then((response) => {
        //     console.log("response.data", response.data);
        //     set the setStockNames useState
        //         (response.data).forEach((data: any) => {
        //             console.log("data.Name", data.Gold_Rate, data.Silver_Rate);
        //             setGoldRate(data.Gold_Rate)
        //             setSilverRate(data.Silver_Rate)
        //         })
        //     setStockNames(arr)
        //     console.log("arr", arr)
        // });

        return arr;
    }

    public static addStock(stock: Stock) {

        //   axios.post(`http://localhost:${PORT}/AddStocks`, {
        //     Name: stockName,
        //     Stock_type: stockType, 
        //     Date: stockDate, 
        //     Quantity: stockQuantity,
        //     Weight: stockWeight,
        //     Remarks: stockRemarks
        // })
        // .then((response) => {
        //   console.log('Data posted:', response.data);
        // })
        // .catch((error) => {
        //   console.error('Error:', error);
        // });

    }
    public static getStockHistoryFn(stockName: string): Stock[] {
        var stockHistory: Stock[] = []
        //   const qstr = `http://localhost:${PORT}/GetStocksHistory?Name='${stockName}'`
        //   console.log(qstr)
        //   axios.get(qstr).then((response) => {
        //     console.log("response.data.....", response.data);

        //     //initialize an stockhistory array
        //     var stockHistoryObjColl: stocksHistory[] = [];

        //     (response.data).forEach((data: any) => {
        //       console.log("data", data)
        //       console.log("name", data.Stocks_id)

        //       console.log("date...2", data.Date)
        //       var sqlDateTime = new Date(data.Date);
        //       console.log("sqlDateTime...2", data.Date, sqlDateTime)
        //       const year = sqlDateTime.getFullYear();
        //       const month = String(sqlDateTime.getMonth() + 1).padStart(2, '0');
        //       const day = String(sqlDateTime.getDate()).padStart(2, '0');
        //       console.log(`hhi${year}-${month}-${day}`);


        //       //create a stock history object here
        //       //assign the values from response.data to the newly created stock history object
        //       //push the stock history object to the collection 

        //       const stockHistoryObj: stocksHistory =
        //       {
        //         id: data.Stocks_id,
        //         name: data.Name,
        //         date: `${year}-${month}-${day}`,
        //         quantity: data.Quantity,
        //         weight: data.Weight,
        //         remarks: data.Remarks
        //       }
        //       stockHistoryObjColl.push(stockHistoryObj)
        //     })
        //     setStocksHistory(stockHistoryObjColl)
        //   });
        return stockHistory
    }
    public static getStockReportFn(stockName: string): Stock[] {
        var stockReport: Stock[] = []

        return stockReport
    }
    public static saveBillData(billDataIn: BillData) {
        // axios.post(`http://localhost:${PORT}/newbill`, {
        //   // Name: stockName,
        //   // Stock_type: stockType, 
        //   // Date: stockDate, 
        //   // Quantity: stockQuantity,
        //   // Weight: stockWeight,
        //   // Remarks: stockRemarks
        //   JsonStr: str
        // })
        //   .then((response) => {
        //     console.log('Data posted:', response.data);
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
        LocalService.billData = billDataIn
    }
    public static viewBillUsingName(name: String): viewBills[] {
        // setRows([])
        // axios.get(`http://localhost:${PORT}/GetViewBillUsingName?Name=${name}`).then((response) => {
        //   console.log("response.data.....", response.data);

        //   var viewBillsUsingNameArr: viewBills[] = [];

        //   (response.data).forEach((data: any) => {
        //     const BillUsingName: viewBills = {
        //       id: data.Create_Bill_id,
        //       name: data.Name,
        //       phoneNo: data.Phone,
        //       invoiceNo: data.Invoice_No,
        //       date: data.Date,
        //       address: data.Address,
        //       goldWeight: data.Gold_Rate,
        //       silverWeight: data.Silver_Rate,
        //       oldItemWeight: data.Old_Gold_Total_Weight,
        //       discount: data.Discount,
        //       billAmount: data.Total
        //     }
        //     viewBillsUsingNameArr.push(BillUsingName)
        //   })
        //   setRows(viewBillsUsingNameArr)
        // });
        return LocalService.viewBillUsingNameColl
    }
    public static viewBillUsingInvoice(invoiceNo: string): viewBills[] {
        //  setRows([])
        // axios.get(`http://localhost:${PORT}/GetViewBillUsingInvoiceNo?Invoice_No=${invoiceNo}`).then((response) => {
        //   console.log("response.data.....", response.data);
        //   var viewBillsUsingInvoiceArr: viewBills[] = [];

        //   (response.data).forEach((data: any) => {
        //     const BillUsingInvoice: viewBills = {
        //       id: data.Create_Bill_id,
        //       name: data.Name,
        //       phoneNo: data.Phone,
        //       invoiceNo: data.Invoice_No,
        //       date: data.Date,
        //       address: data.Address,
        //       goldWeight: data.Gold_Rate,
        //       silverWeight: data.Silver_Rate,
        //       oldItemWeight: data.Old_Gold_Total_Weight,
        //       discount: data.Discount,
        //       billAmount: data.Total
        //     }
        //     viewBillsUsingInvoiceArr.push(BillUsingInvoice)
        //   })
        //   setRows(viewBillsUsingInvoiceArr)
        // });
        return LocalService.viewBillUsingInvoiceNoColl
    }
    public static viewBillUsingPhone(phoneNo: string): viewBills[] {
        //  setRows([])
        // axios.get(`http://localhost:${PORT}/GetViewBillUsingPhoneNo?Phone=${phone}`).then((response) => {
        //   console.log("response.data.....", response.data);
        //   var viewBillsUsingPhoneArr: viewBills[] = [];

        //   (response.data).forEach((data: any) => {
        //     const BillUsingPhone: viewBills = {
        //       id: data.Create_Bill_id,
        //       name: data.Name,
        //       phoneNo: data.Phone,
        //       invoiceNo: data.Invoice_No,
        //       date: data.Date,
        //       address: data.Address,
        //       goldWeight: data.Gold_Rate,
        //       silverWeight: data.Silver_Rate,
        //       oldItemWeight: data.Old_Gold_Total_Weight,
        //       discount: data.Discount,
        //       billAmount: data.Total
        //     }
        //     viewBillsUsingPhoneArr.push(BillUsingPhone)
        //   })
        //   setRows(viewBillsUsingPhoneArr)
        // });
        return LocalService.viewBillUsingphoneNoColl
    }
    public static viewBillUsingDates(dateFrom: string, dateTo: string): viewBills[] {
        // setRows([])
        // axios.get(`http://localhost:${PORT}/GetViewBillUsingDates?Date=${selectedDateFrom}&Date=${selectedDateTo}`).then((response) => {
        //   console.log("response.data.....", response.data);
        //   var viewBillsUsingDatesArr: viewBills[] = [];

        //   (response.data).forEach((data: any) => {
        //     const BillUsingDates: viewBills = {
        //       id: data.Create_Bill_id,
        //       name: data.Name,
        //       phoneNo: data.Phone,
        //       invoiceNo: data.Invoice_No,
        //       date: data.Date,
        //       address: data.Address,
        //       goldWeight: data.Gold_Rate,
        //       silverWeight: data.Silver_Rate,
        //       oldItemWeight: data.Old_Gold_Total_Weight,
        //       discount: data.Discount,
        //       billAmount: data.Total
        //     }
        //     viewBillsUsingDatesArr.push(BillUsingDates)
        //   })
        //   setRows(viewBillsUsingDatesArr)
        // });
        return LocalService.viewBillUsingDateColl
    }
}


export class ServiceManager {
    public static getStockNames(): string[] {
        if (isLocal) {
            return LocalService.getStockNames();
        }
        else {
            return HttpService.getStockNames();
        }
    }
    public static updatingRate(ratesIn: Rates) {
        if (isLocal) {
            LocalService.updatingRate(ratesIn);
        }
        else {
            HttpService.updatingRate(ratesIn);
        }
    }
    public static getRateUpdates(): Rates {
        if (isLocal) {
            return LocalService.getRateUpdates();
        }
        else {
            return HttpService.getRateUpdates();
        }
    }
    public static addStock(stock: Stock) {
        if (isLocal) {
            LocalService.addStock(stock);
        }
        else {
            HttpService.addStock(stock);
        }
    }
    public static getStockHistoryFn(stockName: string): Stock[] {
        console.log("ServiceManager getStockHistoryFn")
        if (isLocal) {
            return LocalService.getStockHistoryFn(stockName);
        }
        else {
            return HttpService.getStockHistoryFn(stockName);
        }
    }
    public static getStockReportFn(stockName: string): Stock[] {
        console.log("ServiceManager getStockReportFn")
        if (isLocal) {
            return LocalService.getStockReportFn(stockName);
        }
        else {
            return HttpService.getStockReportFn(stockName);
        }
    }
    public static saveBillData(billDataIn: BillData) {
        if (isLocal) {
            LocalService.saveBillData(billDataIn);
        }
        else {
            HttpService.saveBillData(billDataIn);
        }
    }
    public static viewBillUsingName(name: String): viewBills[] {
        if (isLocal) {
            return LocalService.viewBillUsingName(name);
        }
        else {
            return HttpService.viewBillUsingName(name);
        }
    }
    public static viewBillUsingInvoice(invoiceNo: string): viewBills[] {
        if (isLocal) {
            return LocalService.viewBillUsingInvoice(invoiceNo);
        }
        else {
            return HttpService.viewBillUsingInvoice(invoiceNo);
        }
    }
    public static viewBillUsingPhone(phoneNo: string): viewBills[] {
        if (isLocal) {
            return LocalService.viewBillUsingPhone(phoneNo);
        }
        else {
            return HttpService.viewBillUsingPhone(phoneNo);
        }
    }
    public static viewBillUsingDates(dateFrom: string, dateTo: string): viewBills[] {
        if (isLocal) {
            return LocalService.viewBillUsingDates(dateFrom, dateTo);
        }
        else {
            return HttpService.viewBillUsingDates(dateFrom, dateTo);
        }
    }
}



























// var arr: string[] = []
// const getStockNames = () => {
//   // console.log("getStockNames")
//   axios.get(`http://localhost:${PORT}/GetStocks`).then((response) => {
//     // console.log("response.data", response.data);
//     //set the setStockNames useState
//     (response.data).forEach((data: any) => {
//       // console.log("data.Name", data.Name)

//       arr.push(data.Name)
//     })
//     setStockNames(arr)
//     // console.log("arr", arr)
//   });
// }




// class Db_From_Client {
//     constructor(httpClient) {
//         this.httpClient = httpClient;
//     }

//     async Stock_Names() {

//         // const [stockNames, setStockNames] = useState<string[]>([]);
//         try {

//             var arr: string[] = []
//             // console.log("getStockNames")
//             const response = await this.httpClient.get(`http://localhost:${PORT}/GetStocks`)
//             // console.log("response.data", response.data);
//             //set the setStockNames useState
//             return ((response.data).forEach((data: any) => {
//                 // console.log("data.Name", data.Name)

//                 arr.push(data.Name)

//             }))
//             // setStockNames(arr)
//             // console.log("arr", arr)
//         } catch (error) {
//             throw error;
//         }
//     }
// }
// }

// export default httpRequest



