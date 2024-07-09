import { Dayjs } from "dayjs";




export interface BillItem {
    id: number;
    product: string;
    qty: number;
    gross_weight: number;
    stone_weight: number;
    stone_rate: number;
    n_wt: number;
    va_percent: number;
    mc_hc: number;
    amount: number;
  }
  
  export interface OldBillItem {
    id: number;
    particulars: string;
    wt: number;
    wastage: number;
    total_wt: number;
    rate: number;
    amount: number;
  }
  
  export interface BillData {
    Name: string;
    Phone: string;
    Address: string;
    Invoice_No: string;
    Date: string | undefined;
    Gold_Rate: number;
    Silver_Rate: number;
    Taxable_Amount: number;
    Discount: number;
    Net_Amount: number;
    Old_Gold_Total_Weight: number;
    Old_Reduced: number;
    Total: number;
    billitems: BillItem[];
    oldbillitems: OldBillItem[];
  }

  export interface Stock{
    Name: string;
    Stock_Type: string;
    Date: string | undefined;
    Quantity: number | undefined;
    Weight: number | undefined;
    Remarks: string;
  }

  export interface Rates{
    Gold_Rate: number;
    Silver_Rate: number;
  }
  
  export interface viewBills {
    id: number;
    name: string;
    phoneNo: string;
    invoiceNo: string;
    date: string | undefined;
    address: string;
    goldWeight: number;
    silverWeight: number;
    oldItemWeight: number;
    discount: number;
    billAmount: number;
  }