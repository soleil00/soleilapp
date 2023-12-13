"use client"

import { products } from "@/constants/products";
import { ArrowBack, Call, Chat, Payment, Person, ShoppingCart, Subscript, SwipeLeftAltRounded } from "@mui/icons-material";
import { Avatar, Button, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { soleilContext } from "../../cartContext";



const ProductDetails = ({ params: { productId } }) => {
  
  const product = products.find(product => product.id === parseInt(productId));
  const dummy=[product.image,'/shoes.jpeg','/drone.jpeg','/bag.jpeg']
  const [show, setShow] = useState(product.image)

  const {setCart,cart} = useContext(soleilContext)
  
  const handleShow = (img) => {
    setShow(img.target.srcset.split(" ")[0])
  }

  const handleAddToCart = () => {
    setCart(state=>state.map(pro=>pro.id !== product.id?[...state,product]:state))
  }


  return <div className="p-[20px]"><Link href="/market"> <ArrowBack /> </Link>
    
    
    <ListItem disablePadding>
      <ListItemIcon>
        <ListItemAvatar>
          <Avatar>
            <Person/>
          </Avatar>
        </ListItemAvatar>
      </ListItemIcon>
      <ListItemText primary="@soleil00" secondary={<Link href="/">View entire seller shop</Link> } />
    </ListItem>
  
    <Image src={show} alt="image" width={300} height={34} className="w-[100%] sm:h-auto h-[300px] my-3  rounded-lg" />
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={1}>
      {dummy.map((img,index) => (
        <Image src={img} alt="image" key={img} width={300} height={30} className="w-[90%] h-[50px] sm:h-[100px] my-3 border-2 border-yellow-500  rounded-lg" onClick={img=>handleShow(img)} />
      ))}
    </Stack>
    <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"} >
      <Stack>
        <Typography>{ product.name}</Typography>
        <Typography>{product.price} Pi</Typography>
      </Stack>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"} alignItems={"center"}>
        <Avatar>
        <Chat />
        </Avatar>
        <Avatar>
          <Call/>
        </Avatar>
      </Stack>
    </Stack>
    <Typography className="my-3">this is product description that will usualy says about spoecific properties of a give product to make it good for buyer to distingqish it from others
    
      and i think we should include some markdown inside her as to make it good
    </Typography>

    {cart.includes(product) ? (
      <Stack justifyContent={"space-between"} direction="row" alignItems={"center"} spacing={1}>
        <Button
          size="small"
      variant="outlined"
      fullWidth className="bg-red-400 text-inherit text-[12px]"
      onClick={()=>setCart(state=>state.filter(pro=>pro.id !== product.id))}
      endIcon={<ShoppingCart />}>
      Remove from
    </Button>
      <Button
          size="small"
          
      variant="outlined"
      fullWidth className="bg-green-700 text-inherit text-[12px]"
      endIcon={<Payment />}>
      pay now {""}<span style={{color:"red",marginLeft:"4px"}}>({product.price} Pi)</span>
    </Button>
    </Stack>
    ): (
      <Button
      variant="outlined"
      fullWidth className="bg-green-400"
      onClick={()=>setCart(state=>[...state,product])}
      endIcon={<ShoppingCart />}>
      Add to cart
    </Button>
    )}
    
    
  
  </div>;
};

export default ProductDetails;
