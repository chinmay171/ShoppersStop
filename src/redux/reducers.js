let initialState = [
    {
        id : 0,
        name : "Iphone",
        img : "https://rukminim1.flixcart.com/image/832/832/kg8avm80/mobile/q/8/f/apple-iphone-12-dummyapplefsn-original-imafwg8dbzv8vh7t.jpeg?q=70",
        price: 50000,
        qty: 1,
    },
    {
        id : 1,
        name : "macBook",
        img : "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1655466743/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256605_errxxc.png/mxw_2048,f_auto",
        price: 125000,
        qty: 1,
    },
    {
        id : 2,
        name : "HeadPhone",
        img : "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/plp/bbd.plpasset.headphones.studio3-v2.jpg.large.2x.jpg",
        price: 20000,
        qty: 1,
    }
]

let reducer = (state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            let cp = state.map((el)=>el);
            let id = action.payload;
            cp[id].qty = cp[id].qty+1;
            return cp;
        case "REMOVE_FROM_CART":
            cp = state.map((el)=>el);
            id = action.payload;
            if(cp[id].qty>0)
                cp[id].qty = cp[id].qty-1;
            return cp;
        default:
            return state;
    }
}

export default reducer;