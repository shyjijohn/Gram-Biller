import * as React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SaveIcon from '@mui/icons-material/Save';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { DataGrid, GridColDef, GridRowsProp, GridRowId, GridRowParams, GridRenderCellParams } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import { randomId } from '@mui/x-data-grid-generator';
import axios from 'axios'
import Autocomplete from '@mui/material/Autocomplete';




interface BillItem {
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

interface OldBillItem {
  id: number;
  particulars: string;
  wt: number;
  wastage: number;
  total_wt: number;
  rate: number;
  amount: number;
}

interface BillData {
  Name: string;
  Phone: string;
  Address: string;
  Invoice_No: string;
  Date: Dayjs | null;
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


const initialRows: BillItem[] = [
  { id: 1, product: '', qty: 0, gross_weight: 0.000, stone_weight: 0.000, stone_rate: 0.00, n_wt: 0.000, va_percent: 0.00, mc_hc: 0.00, amount: 0.00 },
];

const initialOldRows: OldBillItem[] = [
  { id: 1, particulars: '', wt: 0.000, wastage: 0.000, total_wt: 0.000, rate: 0.00, amount: 0.00 },
];


export default function CreateBill() {

//   //get only stock names from DB 
//   //assign or store those name in a usestate variable 
//   //create the columns collection after defining usestate in this react component.  


  const [rows, setRows] = useState<BillItem[]>(initialRows);
  const [clickedRowId, setClickedRowId] = useState();
  const [stockNames, setStockNames] = useState<string[]>([]);

  const [name, setName] = useState<string>('');

  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const [address, setAddress] = useState<string>('');
  const [invoiceNo, setInvoiceNo] = useState<string>(Math.floor(100000 + Math.random() * 900000).toString());
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [goldRate, setGoldRate] = useState<number>(0);
  const [silverRate, setSilverRate] = useState<number>(0);

  const [nextId, setNextId] = useState<number>(2);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [taxableAmount, setTaxableAmount] = useState<number>(0.00);
  const [inWordsAmount, setInWordsAmount] = useState<string>('');

  const [discount, setDiscount] = useState<number>(0.00);
  const [netAmount, setNetAmount] = useState<number>(0.00);


  const PORT = 3000;


  const [oldRows, setOldRows] = useState<OldBillItem[]>(initialOldRows);
  const [clickedOldRowId, setClickedOldRowId] = useState();
  const [oldReduced, setOldReduced] = useState<number>(0.00);
  const [oldGoldTotalWeight, setOldGoldTotalWeight] = useState<number>(0.000);
  const [total, setTotal] = useState<number>(0.00);


  
  //get stocknames


  var arr: string[] = []
  const getStockNames = () => {
    // console.log("getStockNames")
    axios.get(`http://localhost:${PORT}/GetStocks`).then((response) => {
      // console.log("response.data", response.data);
      //set the setStockNames useState
      (response.data).forEach((data: any) => {
        // console.log("data.Name", data.Name)

        arr.push(data.Name)
      })
      setStockNames(arr)
      // console.log("arr", arr)
    });
  }

  //get rate updates
  const getRateUpdates = () => {
    // console.log("getRateUpdates")
    axios.get(`http://localhost:${PORT}/GetRates`).then((response) => {
      // console.log("response.data", response.data);
      //set the setStockNames useState
      (response.data).forEach((data: any) => {
        // console.log("data.Name", data.Gold_Rate, data.Silver_Rate);
        setGoldRate(data.Gold_Rate)
        setSilverRate(data.Silver_Rate)
      })
      // setStockNames(arr)
      // console.log("arr", arr)
    });
  }


  useEffect(() => {
    getStockNames()
    getRateUpdates()
  }, [])

  //valuegetter fn
  // function makeNWTValue(value: any, row: any) {
  //   // console.log("value : ", value)
  //   // console.log("row : ", row)
  //   return row.gross_weight - row.stone_weight
  // }

  // function makeAmount(value: any, row: any) {
  //   // console.log("makeAmount row : ", row)
  //   // console.log("usestate : ", goldRate)
  //   // if(params.row == undefined)
  //   //   {
  //   //     return 0
  //   //   }
  //   // const Gold:any = goldRate

  //   const makeAmountVar: number = parseFloat((((row.gross_weight - row.stone_weight) + (((row.gross_weight - row.stone_weight) * row.va_percent) / 100)) * goldRate) + row.mc_hc + row.stone_rate)
  //   const amountToFixed: string = makeAmountVar.toFixed(2);
  //   // Math.round((num + Number.EPSILON) * 100) / 100;
  //   var addAmountArr: number[] = [];
  //   var addAmountVar:number = 0
  //   var addAmountFinal:number = 0
  //   function addAmount(){
  //     rows.map((row) => addAmountArr.push(row.amount));
  //     // console.log("Added amount", addAmountArr)
  //     for (let i = 0; i < addAmountArr.length; i++) {
  //       // console.log("i.....", i)
  //       addAmountVar += addAmountArr[i];  
  //       // console.log("Added amount Var", addAmountVar)  
  //     } 
  //     addAmountFinal = addAmountVar + parseFloat(amountToFixed)
  //     // console.log("Added amount final", addAmountFinal)
  //   }
  //   addAmount()
  //   setTaxableAmount(addAmountFinal)
  //   if(!isNaN(addAmountFinal))
  //     {
  //       setInWordsAmount(converter.toWords(addAmountFinal))
  //     }
  //   return amountToFixed
  // }

  // function makeTotalWT(value: any, row: any) {
  //   // console.log("value : ", value)
  //   // console.log("row : ", row)
  //   return row.wt - row.wastage
  // }

  // function makeAmountInOldGold(value: any, row: any) {
  //   // console.log("value : ", value)
  //   // console.log("row : ", row)
  //   return row.rate * (row.wt - row.wastage)
  // }


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'S.No' },
    {
      field: 'product', headerName: 'Product', width: 130, editable: true,
      // type: 'singleSelect',
      // valueOptions: stockNames
      renderEditCell: (params) => (
        <Autocomplete
          id="combo-box-demo"
          options={stockNames}
          defaultValue={stockNames[0]}
          sx={{ width: 750 }}
          onChange={(event, newValue) => {
            params.api.setEditCellValue({ id: params.id, field: params.field, value: newValue }, event);
          }}
          renderInput={(params) => (<TextField {...params} />)}
        />
      ),
    },
    { field: 'qty', headerName: 'QTY', editable: true },
    { field: 'gross_weight', headerName: 'Gross Weight', editable: true },
    { field: 'stone_weight', headerName: 'Stone Weight', editable: true },
    { field: 'stone_rate', headerName: 'Stone Rate', editable: true },
    { field: 'n_wt', headerName: 'N.WT' },
    { field: 'va_percent', headerName: 'VA%', editable: true },
    { field: 'mc_hc', headerName: 'MC/HC', editable: true },
    { field: 'amount', headerName: 'Amount' },
  ];


  const oldColumns: GridColDef[] = [
    // { field: 'id', headerName: 'S.No', hideable: true },
    { field: 'particulars', headerName: 'Particulars', editable: true },
    { field: 'wt', headerName: 'WT', editable: true },
    { field: 'wastage', headerName: 'Wastage', editable: true },
    { field: 'total_wt', headerName: 'Total_WT', editable: true },
    { field: 'rate', headerName: 'Rate', editable: true },
    { field: 'amount', headerName: 'Amount' },
  ];

  const handleProcessRowUpdateError = (error: any) => {
    console.log("Row update error : ", error)
  }
  const handleProcessRowUpdate = (newRow: any) => {

    console.log("handleProcessRowUpdate : old rows", rows)
    console.log("handleProcessRowUpdate : new row", newRow)

    for (let i = 0; i < rows.length; i++) {
      console.log("rows in for loop", rows)
      if (rows[i].id === newRow.id) {
        newRow.n_wt = newRow.gross_weight - newRow.stone_weight
        console.log("newRow.n_wt", newRow.n_wt, newRow.gross_weight, newRow.stone_weight)
        newRow.amount = parseFloat((((newRow.gross_weight - newRow.stone_weight) + (((newRow.gross_weight - newRow.stone_weight) * newRow.va_percent) / 100)) * goldRate) + newRow.mc_hc + newRow.stone_rate).toFixed(2)
        console.log("newRow.amount", newRow.amount)
      }
    }
    const newRows = rows.map((row) => (row.id === newRow.id ? newRow : row))
    console.log("new rows : ", newRows)
    // // const updatedRow = { ...newRow };
    setRows(newRows);
    console.log("now new row : ", newRow)


    var addAmountArr: number[] = [];
    var addAmountVar: number = 0
    // var addAmountFinal: number = 0
    function addAmount() {
      newRows.map((row) => addAmountArr.push(parseFloat(row.amount)));
      console.log("Added amount", addAmountArr)
      for (let i = 0; i < addAmountArr.length; i++) {
        console.log("i.....", i)
        addAmountVar = addAmountVar + addAmountArr[i];
        console.log("Added amount Var", addAmountVar)
      }
      // addAmountFinal = addAmountVar + parseFloat(amountToFixed)
      // console.log("Added amount final", addAmountFinal)
    }
    addAmount()
    setTaxableAmount(addAmountVar)
    if (!isNaN(addAmountVar)) {
      setInWordsAmount(converter.toWords(addAmountVar))
    }
    return newRow;
  }


  const handleProcessOldRowUpdateError = (error: any) => {
    console.log("Row update error : ", error)
  }
  const handleProcessOldRowUpdate = (newOldRow: any) => {

    console.log("handleProcessOldRowUpdate : old rows", oldRows)
    console.log("handleProcessOldRowUpdate : new row", newOldRow)

    for (let i = 0; i < oldRows.length; i++) {
      console.log("old rows in for loop", oldRows)
      if (oldRows[i].id === newOldRow.id) {
        newOldRow.total_wt = newOldRow.wt - newOldRow.wastage
        console.log("newOldRow.total_wt", newOldRow.total_wt, newOldRow.wt, newOldRow.wastage)
        newOldRow.amount = newOldRow.rate * (newOldRow.wt - newOldRow.wastage)
        console.log("newOldRow.amount", newOldRow.amount)
      }
    }

    const newOldRows = oldRows.map((row) => (row.id === newOldRow.id ? newOldRow : row))
    console.log("new old rows : ", newOldRows)
    // const updatedRow = { ...newRow };
    setOldRows(newOldRows);

    var addAmountArrInOldRows: number[] = [];
    var addAmountVarInOldRows: number = 0
    // var addAmountFinalInOldRows: number = 0
    function addAmountInOldRows() {
      newOldRows.map((row) => addAmountArrInOldRows.push(parseFloat(row.amount)));
      console.log("Added amount In OldRows", addAmountArrInOldRows)
      for (let i = 0; i < addAmountArrInOldRows.length; i++) {
        console.log("i.....", i)
        addAmountVarInOldRows = addAmountVarInOldRows + addAmountArrInOldRows[i];
        console.log("Added amount Var In OldRows", addAmountVarInOldRows)
      }
      // addAmountFinal = addAmountVar + parseFloat(amountToFixed)
      // console.log("Added amount final", addAmountFinal)
    }
    addAmountInOldRows()
    setOldReduced(addAmountVarInOldRows)



    var addOldWeightArrInOldRows: number[] = [];
    var addOldWeightVarInOldRows: number = 0
    // var addAmountFinalInOldRows: number = 0
    function addOldWeightInOldRows() {
      newOldRows.map((row) => addOldWeightArrInOldRows.push(parseFloat(row.total_wt)));
      console.log("Added amount In OldRows", addOldWeightArrInOldRows)
      for (let i = 0; i < addOldWeightArrInOldRows.length; i++) {
        console.log("i.....", i)
        addOldWeightVarInOldRows = addOldWeightVarInOldRows + addOldWeightArrInOldRows[i];
        console.log("Added amount Var In OldRows", addOldWeightVarInOldRows)
      }
      // addAmountFinal = addAmountVar + parseFloat(amountToFixed)
      // console.log("Added amount final", addAmountFinal)
    }
    addOldWeightInOldRows()
    setOldGoldTotalWeight(addOldWeightVarInOldRows)

    var totalVar: number = 0
    if (netAmount != undefined && oldReduced != undefined) {
      totalVar = netAmount - addAmountVarInOldRows
      console.log("Total", totalVar)
      setTotal(totalVar)
    }
    return newOldRow;
  }


  function handleAddRow() {

    console.log('handleAddRow : ');
    console.log('Old rows : ', rows);

    const id = randomId();
    // const newRow = { id: idValue, product: '', qty: 0, gross_weight: 0.000, stone_weight: 0.000, stone_rate: 0.00, n_wt: 0.000, va_percent: 0.00, mc_hc: 0.00, amount: 0.00 }

    // const copyRows  = [...rows]; 
    // copyRows.push(newRow);

    // console.log("CopyRows", copyRows)
    // setRows(copyRows)
    // console.log("prevRows", prevRows);
    setRows((prevRows) => [
      ...prevRows,
      { id: prevRows.length + 1, product: '', qty: 0, gross_weight: 0.000, stone_weight: 0.000, stone_rate: 0.00, n_wt: 0.000, va_percent: 0.00, mc_hc: 0.00, amount: 0.00, isNew: true },
    ]);
  }

  function handleAddOldRow() {

    console.log('handleAddOldRow : ');
    console.log('Old rows : ', rows);
    if (oldRows == null || oldRows == undefined) {
      setOldRows(initialOldRows)
    }
    else {
      setOldRows((prevOldRows) => [
        ...prevOldRows,
        { id: prevOldRows.length + 1, particulars: '', wt: 0.000, wastage: 0.000, total_wt: 0.000, rate: 0.00, amount: 0.00 },
      ]);
    }

  }

  function handleRowClick(params: GridRowParams) {
    console.log('Row clicked:', params.row.id);
    console.log('Row:', params.row);
    setClickedRowId(params.row.id)
  };

  function handleOldRowClick(params: GridRowParams) {
    console.log('Old Row clicked:', params.row.id);
    console.log('Old Row:', params.row);
    setClickedOldRowId(params.row.id)
  };

  function handleDeleteRow(btnEvent: React.MouseEvent<HTMLButtonElement>) {
    console.log('delete existing row', btnEvent);
    console.log('clickedRowId : ', clickedRowId);

    setRows((prevRows) => {
      const newRows = prevRows.filter((row) => row.id !== clickedRowId)
      console.log('new rows', newRows);
      const newRowsCpy = newRows.map((row, index) => ({ ...row, id: index + 1 }));
      console.log('new rowsb after', newRowsCpy);
      return newRowsCpy;
    });
  };


  function handleDeleteOldRow(btnEvent: React.MouseEvent<HTMLButtonElement>) {
    console.log('delete existing oldrow', btnEvent);
    console.log('clickedOldRowId : ', clickedOldRowId);

    setOldRows((prevOldRows) => {
      const newOldRows = prevOldRows.filter((row) => row.id !== clickedOldRowId)
      console.log('new old rows', newOldRows);
      const newOldRowsCpy = newOldRows.map((row, index) => ({ ...row, id: index + 1 }));
      console.log('new old rows after', newOldRowsCpy);
      return newOldRowsCpy;
    });
  };


  function handleSave() {
    // e.preventDefault();

    //Create bill object
    //fill the bill object with the collected data 
    //convert to json 
    //send to backend

    const billObject: BillData =
    {
      Name: name,
      Phone: phone,
      Address: address,
      Invoice_No: invoiceNo,
      Date: date,
      Gold_Rate: goldRate,
      Silver_Rate: silverRate,
      Taxable_Amount: taxableAmount,
      Discount: discount,
      Net_Amount: netAmount,
      Old_Gold_Total_Weight: oldGoldTotalWeight,
      Old_Reduced: oldReduced,
      Total: total,
      billitems: rows,
      oldbillitems: oldRows
    };

    const str = JSON.stringify(billObject);

    console.log("Bill String:", str);

    axios.post(`http://localhost:${PORT}/newbill`, {
      // Name: stockName,
      // Stock_type: stockType, 
      // Date: stockDate, 
      // Quantity: stockQuantity,
      // Weight: stockWeight,
      // Remarks: stockRemarks
      JsonStr: str
    })
      .then((response) => {
        console.log('Data posted:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });


    // const response = fetch(`http://localhost:${PORT}/newbill`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: str

    // });
    // console.log(" final response", response);
    // // if (response) {
    //   const result =  response.json();
    //   console.log('Success:', result);
    // } else {
    //   console.error('Error:', response.statusText);
    // }
  };


  //inputs
  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("handleName", e.target.value);
    setName(e.target.value);
  };

  function handlePhone(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setPhone(newValue);
    if (validatePhoneNumber(newValue)) {
      setError(false);
      setHelperText('');
    } else {
      setError(true);
      setHelperText('Invalid phone number. Please enter a 10-digit number.');
    }
  };

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  function handleAddress(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("handleAddress", e.target.value);
    if (error == false) {
      setAddress(e.target.value);
    }
    else {
      alert("Please fill the phone number")
    }
  };

  // function handleInvoiceNo() {
  //   const newInvoiceNumber = generateRandomInvoiceNumber();
  //   console.log("handleInvoiceNo", newInvoiceNumber);
  //   setInvoiceNo(newInvoiceNumber);
  // };

  // const generateRandomInvoiceNumber = () => {
  //   return Math.floor(100000 + Math.random() * 900000).toString();
  // };

  function handleDate(newValue: Dayjs | null) {
    console.log("handleDate", newValue);
    setDate(newValue);
  };

  function handleGoldRate(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("handleGoldRate", e.target.value);
    setGoldRate(parseFloat(e.target.value));
  };

  function handleSilverRate(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("handleSilverRate", e.target.value);
    setSilverRate(parseFloat(e.target.value));
  };

  function handleDiscount(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("handleDiscount", e.target.value);
    const discountVar = parseFloat(e.target.value);
    console.log("discountVar", discountVar)
    setDiscount(discountVar);

    if (taxableAmount != undefined) {
      const netAmountVar = taxableAmount - discountVar
      setNetAmount(netAmountVar)
      console.log("netAmountVar", netAmountVar)
    }

  };


  var converter = require('number-to-words');
  return (

    <Stack display="flex" alignSelf="center" justifyContent="center" spacing={2} direction="row" >
       
        <Card sx={{
          maxWidth: '60%',
          bgcolor: "white",
          alignSelf: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <CardContent sx={{ maxWidth: '100%' }}>
            <Box
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: '2px solid gray', maxWidth: '100%' }}
            >
              <Stack sx={{ maxWidth: '100%', display: 'flex', direction: 'row' }}>
                <Stack paddingTop={2} spacing={0} direction="column" sx={{ maxWidth: '100%' }}>
                  <Typography sx={{ alignSelf: "center" }}>
                    Jewellers
                  </Typography >
                  <Typography sx={{ alignSelf: "center" }}>
                    Kulasekharam
                  </Typography >
                  <Typography sx={{ alignSelf: "center" }}>
                    8438607589
                  </Typography >
                </Stack>

                <Stack paddingTop={2} spacing={2} direction="row" justifyContent="space-between"
                  sx={{ maxWidth: '100%' }}>
                  <Stack spacing={2} direction="column" sx={{ maxWidth: '40%' }}>
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "center" }}>
                        Name:
                      </Typography >
                      <TextField id="outlined-basic" variant="standard" size="small" value={name} onChange={handleName} />
                    </Stack>
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "center" }}>
                        Phone:
                      </Typography >
                      <TextField variant="standard" value={phone} onChange={handlePhone} error={error} helperText={helperText} />
                    </Stack>
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "center" }}>
                        Address:
                      </Typography >
                      <Stack spacing={2} direction="column">
                        <TextField id="standard-multiline-flexible" multiline maxRows={4}
                          variant="standard" size="small" value={address} onChange={handleAddress} />
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack spacing={2} direction="column">
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "center" }}>
                        Invoice No:
                      </Typography >
                      <Typography>{invoiceNo}</Typography>
                    </Stack>
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "center" }}>
                        Date:
                      </Typography >
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker value={date} onChange={handleDate} />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Stack>
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "center" }}>
                        Gold Rate:
                      </Typography >
                      <TextField id="outlined-basic" variant="standard" size="small" type="number" value={goldRate} onChange={handleGoldRate} />
                    </Stack>
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "center" }}>
                        Silver Rate:
                      </Typography >
                      <TextField id="outlined-basic" variant="standard" size="small" type="number" value={silverRate} onChange={handleSilverRate} />
                    </Stack>
                  </Stack>
                </Stack>

                <Container style={{ paddingTop: 20, height: 250, width: '100%' }}>
                  <DataGrid
                    editMode="row"
                    rows={rows}
                    columns={columns}
                    // disableRowSelectionOnClick
                    // autoHeight
                    hideFooterPagination
                    processRowUpdate={handleProcessRowUpdate}
                    onProcessRowUpdateError={handleProcessRowUpdateError}
                    onRowClick={handleRowClick}
                    sx={{
                      '& .MuiDataGrid-root': {
                        fontSize: '12px',
                      },
                      '& .MuiDataGrid-cell': {
                        fontSize: '12px',
                      },
                      '& .MuiDataGrid-columnHeaders': {
                        fontSize: '12px',
                        font: 'bold',
                      },
                    }}
                  />
                </Container>


                <Stack paddingTop={2} spacing={2} direction="row" justifyContent="space-between">
                  <Typography sx={{ alignSelf: "left" }}>
                    In Words:
                  </Typography >
                  <Typography sx={{ alignSelf: "left" }}>{inWordsAmount} only</Typography>
                  <Stack paddingTop={2} spacing={2} direction="column">
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "right" }}>
                        Taxable Amount:
                      </Typography >
                      <Typography sx={{ alignSelf: "center" }}>
                        {taxableAmount}
                      </Typography >
                    </Stack>
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "center" }}>
                        Discount:
                      </Typography >
                      <TextField id="outlined-basic" variant="standard" size="small" value={discount} onChange={handleDiscount} />
                    </Stack>
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "center" }}>
                        NET AMOUNT:
                      </Typography >
                      <Typography sx={{ alignSelf: "center" }}>
                        {netAmount}
                      </Typography >
                    </Stack>
                  </Stack>
                </Stack>



                <Container style={{ fontSize: 12, paddingTop: 20, alignSelf: "flex-start", height: 200, width: '50%' }}>
                  <DataGrid
                    editMode="row"
                    rows={oldRows}
                    columns={oldColumns}
                    // disableRowSelectionOnClick
                    // autoHeight
                    hideFooterPagination
                    processRowUpdate={handleProcessOldRowUpdate}
                    onProcessRowUpdateError={handleProcessOldRowUpdateError}
                    onRowClick={handleOldRowClick}
                    sx={{
                      '& .MuiDataGrid-root': {
                        fontSize: '12px',
                      },
                      '& .MuiDataGrid-cell': {
                        fontSize: '12px',
                      },
                      '& .MuiDataGrid-columnHeaders': {
                        fontSize: '12px',
                      },
                    }}
                  />
                </Container>


                <Stack paddingTop={2} spacing={2} direction="row" justifyContent="space-between">
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "left" }}>
                      Old Gold Total Weight:
                    </Typography >
                    <Typography sx={{ alignSelf: "center" }}>
                      {oldGoldTotalWeight}
                    </Typography >
                  </Stack>
                  <Stack spacing={2} direction="column">
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "right" }}>
                        Old Reduced:
                      </Typography >
                      <Typography sx={{ alignSelf: "center" }}>
                        {oldReduced}
                      </Typography >
                    </Stack>
                    <Stack spacing={2} direction="row">
                      <Typography sx={{ alignSelf: "center" }}>
                        TOTAL:
                      </Typography >
                      <Typography sx={{ alignSelf: "center" }}>
                        {total}
                      </Typography >
                    </Stack>
                  </Stack>
                </Stack>

              </Stack>
            </Box>
          </CardContent>
        </Card>
       
       <Stack padding={2} spacing={2} direction="column">
         <Button variant="text" onClick={handleSave}>
          <SaveIcon sx={{ height: 40, width: 40 }} />
        </Button>

       <Button variant="text" onClick={handleAddRow}><LibraryAddIcon sx={{ height: 40, width: 40 }} /></Button>
       <Button variant="text" onClick={handleDeleteRow}><DeleteIcon sx={{ height: 40, width: 40 }} /></Button>
         <Button variant="text" onClick={handleAddOldRow}><LibraryAddIcon sx={{ height: 40, width: 40 }} /></Button>
        <Button variant="text" onClick={handleDeleteOldRow}><DeleteIcon sx={{ height: 40, width: 40 }} /></Button>
      </Stack>
    </Stack>

  )
}

