import axios from "axios";
const URL = 'https://supercart-1.herokuapp.com/api';


export const getProductsBuyBarcode = (barcodesList) => axios.post(`${URL}/product/barcode`,{ barcodes: barcodesList });