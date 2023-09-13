import { Sale } from "../../../../domain/entities/sale";
import { Stock } from "../../../../domain/entities/stock";
import { InitialFilterSale, NewSale, SaleState } from "../../../types/pages/sale.types";
import { StockState } from "../../../types/pages/stock.types";

interface VariablesSales {
  (stockState: StockState, newSale: NewSale): Omit<Sale, "_id">;
}

export const variablesSales: VariablesSales = (
  stockState,
  newSale
): Omit<Sale, "_id"> => {
  const today = new Date();
  const total = newSale.price * newSale.quantity
  const profit = (newSale.price * newSale.quantity) - (newSale.quantity * stockState.costPrice)

  const variables: Omit<Sale, "_id"> = {
    stockId: stockState._id,
    category: stockState.category,
    product: stockState.product,
    subcategory: stockState.subcategory,
    suplier: stockState.suplier,
    quantity: newSale.quantity,
    price: newSale.price,
    total: total,
    costPrice: stockState.costPrice,
    description: stockState.description,
    profit: profit,
    percentage: profit / total,
    date: today.toString(),
  };

  return variables;
};

export const variablesReverseSales = (stockState: SaleState): Sale => {
  const variables: Sale = {
    _id: stockState._id,
    category: stockState.category,
    costPrice: stockState.costPrice,
    date: stockState.date,
    description: stockState.description,
    percentage: stockState.percentage,
    price: stockState.price,
    product: stockState.product,
    profit: stockState.profit,
    quantity: stockState.quantity,
    stockId: stockState.stockId,
    subcategory: stockState.subcategory,
    suplier: stockState.suplier,
    total: stockState.total,
  };

  return variables;
};

export const originStockMoviment = (
  stockState: StockState,
  newSale: NewSale
): Stock => {
  const originStock: Stock = {
    _id: stockState._id,
    category: stockState.category,
    product: stockState.product,
    costPrice: stockState.costPrice,
    description: stockState.description,
    quantity: newSale.quantity,
    subcategory: stockState.subcategory,
    suplier: stockState.suplier,
    total: stockState.total,
  };

  return originStock;
};

export const originStockReverse = ( saleState: SaleState ): Stock => {
  const originStock: Stock = {
    _id: saleState.stockId,
    category: saleState.category,
    product: saleState.product,
    costPrice: saleState.costPrice,
    description: saleState.description,
    quantity: saleState.quantity,
    subcategory: saleState.subcategory,
    suplier: saleState.suplier,
    total: saleState.total,
  };

  return originStock;
};


export const formatDate = (date: string): string => {
  const itemDate = new Date(date)
  const month = (itemDate.getMonth() + 1).toString() 
  const day = itemDate.getDate().toString()
  const year = itemDate.getFullYear().toString()

  const mm = month.length === 1 ? `0${month}` : month
  const dd = day.length === 1 ? `0${day}` : day
  const yy = year.slice(2,4)

  return `${dd}/${mm}/${yy}`
}


export const uniqueDataSales = (sale: Sale[]) => {
  let category: string[] = []
  let product: string[] = []
  let suplier: string[] = [] 
  let month: string[] = []
  let year: string[] = []
  for (let saleItem of sale){
      const monthConverted = convertMonth(new Date(saleItem.date).getMonth())
      const yearConverted: string = new Date(saleItem.date).getFullYear()?.toString()

      suplier.includes(saleItem.suplier) ? null : suplier.push(saleItem.suplier)
      product.includes(saleItem.product) ? null : product.push(saleItem.product)
      category.includes(saleItem.category) ? null : category.push(saleItem.category)
      month.includes(monthConverted) ? null : month.push(monthConverted)
      year.includes(yearConverted) ? null : year.push(yearConverted)
  }
  return  { category, product, suplier, month, year }
}

export const filterSales = (sale: Sale[], filteredSale: InitialFilterSale) =>  {
  let list: Sale[] = []

  for (let i = 0; i < sale.length; i++) {
    const monthConverted = convertMonth(new Date(sale[i].date).getMonth())
    const yearConverted: string = new Date(sale[i].date).getFullYear()?.toString()

     const verifyFilter = sale[i].category.includes(filteredSale.category) &&
     sale[i].suplier.includes(filteredSale.suplier) &&
     sale[i].product.includes(filteredSale.product) &&
     monthConverted.includes(filteredSale.month) &&
     yearConverted.includes(filteredSale.year)

      if(verifyFilter){
          list.push(sale[i])
      }
  }
  return list
}

interface ConvertMonthToString {
  (month: number): string
}

const convertMonth: ConvertMonthToString = (month) => {
  let result = ''
  for(let i = 0; i < months.length; i++){
    if(months[i].monthNumber === month){
       result = months[i].month?.toString()!
      }
    }
    return result
}

const months = [
  {
    monthNumber: 0,
    month: 'Janeiro'
  },
  {
    monthNumber: 1,
    month: 'Fevereiro'},
  {
    monthNumber: 2,
    month: 'Março'},
  {
    monthNumber: 3,
    month: 'Abril'},
  {
    monthNumber: 4,
    month: 'Maio'},
  {
    monthNumber: 5,
    month: 'Junho'},
  {
    monthNumber: 6,
    month: 'Julho'},
  {
    monthNumber: 7,
    month: 'Agosto'},
  {
    monthNumber: 8,
    month: 'Setembro'},
  {
    monthNumber: 9,
    month: 'Outubro'},
  {
    monthNumber: 10,
    month0: 'Novembro'},
  {
    monthNumber: 11,
    month1: 'Dezembro'}
]