export const GET_STOCK = `
    query StockList {
        stock {
            _id
            product
            category
            subcategory
            suplier
            costPrice
            quantity
            total
            description
        }
    }
`;

export const CREATE_STOCK_ITEM = `
    mutation Mutation($stockItem: StockItem) {
        createStockItem(stockItem: $stockItem) {
            _id
            product
            category
            subcategory
            suplier
            costPrice
            quantity
            total
            description
        }
    }
`;


export const UPDATE_STOCK_ITEM = `
    mutation Mutation($stockItem: StockItem) {
        editStockItem(stockItem: $stockItem) {
            _id
            product
            category
            subcategory
            suplier
            quantity
            costPrice
            total
            description    
        }
   }
`

export const DELETE_STOCK_ITEM = `
    mutation Mutation($deleteStockItemId: ID) {
            deleteStockItem(id: $deleteStockItemId) {
                _id
        }
    }
`