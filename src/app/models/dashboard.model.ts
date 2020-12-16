export interface DashboardItemDetails {
    id?: number;
    title?: string;
    description?: string;
    btnText?: string;
    input?: boolean;
    button?: boolean;
    cssClass?: string;
    icon?: boolean;
    chartData?:Array<number>;
    chartLables?:Array<string>;
    chartType?:string;
}
export const DASHBOARD_ITEM_LISTS: DashboardItemDetails[] = [
    {
        id: 1,
        title: `Add products to my stockroom`,
        description: `Search for products on VWR.com`,
        btnText: `Search`,
        input: true,
        button: false,
        icon: false,
        
    }, 
    {
        id: 2,
        title: `Do an inventory count`,
        description: `Your stockroom inventory count has not been updated in 14 days`,
        btnText: `Update inventory now`,
        input: false,
        button: true,
        icon: false
    },
    {
        id: 3,
        title: `Replenish my stock`,
        description: `You currently have 6 products below their Reorder point`,
        btnText: `Place an order`,
        input: false,
        button: true
    },
    {
        id: 4,
        title: `Receive stock`,
        description: `Your replenishment order should be delivered December 7, 2020.`,
        btnText: `Receive orders`,
        input: false,
        button: true
    },
    {
        id: 5,
        title: `Add a new admin user`,
        description: `You have assigned 4 of 5 available admin users.`,
        btnText: `Add an Admin User`,
        input: false,
        button: true,
        icon: false
    },
    {
        id: 5,
        title: `Print product barcodes`,
        description: ``,
        btnText: `Print Product Barcodes`,
        input: false,
        button: true,
        icon: false
    }
];

export const HEADER_ITEM_LISTS: DashboardItemDetails[] = [
    {
        id: 1,
        title: `Unique Products Managed in Your Stockroom`,
        description: `75`
    },
    {
        id: 2,
        title: `Value of Products Managed`,
        description: `$27,136`
    },
    {
        id: 3,
        title: `Stock Overview`,
        description: '$27,136',
        
        chartData:[40, 20, 20 , 10,10],
        chartType: 'pie'
        
    }
]