import Icon from "./bookmark";
import NotIcon from "./NotBookmark";
import { useState,useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";
import { TopSong } from "./Music Player/Top";
import { addToFav,removeToFav,selectFav} from "./store/FavSlice";
import "./HomeLike.css";
function HomeLike()
{
  const [fav1,setfav1] = useState(true);
  const [click1,setClick1] = useState(false);
  const [state1,setstate1] = useState();

  const [fav2,setfav2] = useState(true);
  const [click2,setClick2] = useState(false);
  const [state2,setstate2] = useState();

  const [fav3,setfav3] = useState(true);
  const [click3,setClick3] = useState(false);
  const [state3,setstate3] = useState();

  const [fav4,setfav4] = useState(true);
  const [click4,setClick4] = useState(false);
  const [state4,setstate4] = useState();

  const [fav5,setfav5] = useState(true);
  const [click5,setClick5] = useState(false);
  const [state5,setstate5] = useState();

  const [fav6,setfav6] = useState(true);
  const [click6,setClick6] = useState(false);
  const [state6,setstate6] = useState();

  const [fav7,setfav7] = useState(true);
  const [click7,setClick7] = useState(false);
  const [state7,setstate7] = useState();

  const [fav8,setfav8] = useState(true);
  const [click8,setClick8] = useState(false);
  const [state8,setstate8] = useState();

  const [fav9,setfav9] = useState(true);
  const [click9,setClick9] = useState(false);
  const [state9,setstate9] = useState();

  const [fav10,setfav10] = useState(true);
  const [click10,setClick10] = useState(false);
  const [state10,setstate10] = useState();

  const [fav11,setfav11] = useState(true);
  const [click11,setClick11] = useState(false);
  const [state11,setstate11] = useState();

  const [fav12,setfav12] = useState(true);
  const [click12,setClick12] = useState(false);
  const [state12,setstate12] = useState();

  const [fav13,setfav13] = useState(true);
  const [click13,setClick13] = useState(false);
  const [state13,setstate13] = useState();

  const [fav14,setfav14] = useState(true);
  const [click14,setClick14] = useState(false);
  const [state14,setstate14] = useState();

  const [fav15,setfav15] = useState(true);
  const [click15,setClick15] = useState(false);
  const [state15,setstate15] = useState();

  const [fav16,setfav16] = useState(true);
  const [click16,setClick16] = useState(false);
  const [state16,setstate16] = useState();

  const [fav17,setfav17] = useState(true);
  const [click17,setClick17] = useState(false);
  const [state17,setstate17] = useState();

  const [fav18,setfav18] = useState(true);
  const [click18,setClick18] = useState(false);
  const [state18,setstate18] = useState();

  const [fav19,setfav19] = useState(true);
  const [click19,setClick19] = useState(false);
  const [state19,setstate19] = useState();

  const [fav20,setfav20] = useState(true);
  const [click20,setClick20] = useState(false);
  const [state20,setstate20] = useState();

  const [fav21,setfav21] = useState(true);
  const [click21,setClick21] = useState(false);
  const [state21,setstate21] = useState();

  const [fav22,setfav22] = useState(true);
  const [click22,setClick22] = useState(false);
  const [state22,setstate22] = useState();

  const [fav23,setfav23] = useState(true);
  const [click23,setClick23] = useState(false);
  const [state23,setstate23] = useState();

  const [fav24,setfav24] = useState(true);
  const [click24,setClick24] = useState(false);
  const [state24,setstate24] = useState();

  const [fav25,setfav25] = useState(true);
  const [click25,setClick25] = useState(false);
  const [state25,setstate25] = useState();

  const [fav26,setfav26] = useState(true);
  const [click26,setClick26] = useState(false);
  const [state26,setstate26] = useState();

  const [fav27,setfav27] = useState(true);
  const [click27,setClick27] = useState(false);
  const [state27,setstate27] = useState();

  const [fav28,setfav28] = useState(true);
  const [click28,setClick28] = useState(false);
  const [state28,setstate28] = useState();

  const [fav29,setfav29] = useState(true);
  const [click29,setClick29] = useState(false);
  const [state29,setstate29] = useState();

  const [fav30,setfav30] = useState(true);
  const [click30,setClick30] = useState(false);
  const [state30,setstate30] = useState();

  const [fav31,setfav31] = useState(true);
  const [click31,setClick31] = useState(false);
  const [state31,setstate31] = useState();

  const [fav32,setfav32] = useState(true);
  const [click32,setClick32] = useState(false);
  const [state32,setstate32] = useState();

  const [fav33,setfav33] = useState(true);
  const [click33,setClick33] = useState(false);
  const [state33,setstate33] = useState();

  const [fav34,setfav34] = useState(true);
  const [click34,setClick34] = useState(false);
  const [state34,setstate34] = useState();

  const [fav35,setfav35] = useState(true);
  const [click35,setClick35] = useState(false);
  const [state35,setstate35] = useState();

  const [fav36,setfav36] = useState(true);
  const [click36,setClick36] = useState(false);
  const [state36,setstate36] = useState();

  const [fav37,setfav37] = useState(true);
  const [click37,setClick37] = useState(false);
  const [state37,setstate37] = useState();

  const [fav38,setfav38] = useState(true);
  const [click38,setClick38] = useState(false);
  const [state38,setstate38] = useState();

  const [fav39,setfav39] = useState(true);
  const [click39,setClick39] = useState(false);
  const [state39,setstate39] = useState();

  const [fav40,setfav40] = useState(true);
  const [click40,setClick40] = useState(false);
  const [state40,setstate40] = useState();

  const [fav41,setfav41] = useState(true);
  const [click41,setClick41] = useState(false);
  const [state41,setstate41] = useState();

  const [fav42,setfav42] = useState(true);
  const [click42,setClick42] = useState(false);
  const [state42,setstate42] = useState();

  const [fav43,setfav43] = useState(true);
  const [click43,setClick43] = useState(false);
  const [state43,setstate43] = useState();

  const [fav44,setfav44] = useState(true);
  const [click44,setClick44] = useState(false);
  const [state44,setstate44] = useState();

  const [fav45,setfav45] = useState(true);
  const [click45,setClick45] = useState(false);
  const [state45,setstate45] = useState();

  const [fav46,setfav46] = useState(true);
  const [click46,setClick46] = useState(false);
  const [state46,setstate46] = useState();

  const [fav47,setfav47] = useState(true);
  const [click47,setClick47] = useState(false);
  const [state47,setstate47] = useState();

  const [fav48,setfav48] = useState(true);
  const [click48,setClick48] = useState(false);
  const [state48,setstate48] = useState();

  const [fav49,setfav49] = useState(true);
  const [click49,setClick49] = useState(false);
  const [state49,setstate49] = useState();

  const [fav50,setfav50] = useState(true);
  const [click50,setClick50] = useState(false);
  const [state50,setstate50] = useState();





  const dispatch = useDispatch()
  const counting = useSelector(selectFav);
    console.log("I am counting ",counting)
  const handleChange1=()=>{
    if(fav1)
    {
      setClick1(true)
      setfav1(false);
      dispatch(addToFav(TopSong[0]))
      setstate1(false);
    }
    else
    {
      setfav1(true)
      setstate1(true)
      setClick1(false)
      dispatch(removeToFav(TopSong[0]))
    }
  }  
  const handleChange2=()=>{
    if(fav2)
    {
      setClick2(true)
      setfav2(false);
      dispatch(addToFav(TopSong[1]))
      setstate2(false);
    }
    else
    {
      setfav2(true)
      setstate2(true)
      setClick2(false)
      dispatch(removeToFav(TopSong[1]))
    }
  }  
  const handleChange3=()=>{
    if(fav3)
    {
      setClick3(true)
      setfav3(false);
      dispatch(addToFav(TopSong[2]))
      setstate3(false);
    }
    else
    {
      setfav3(true)
      setstate3(true)
      setClick3(false)
      dispatch(removeToFav(TopSong[2]))
    }
  }  
  const handleChange4=()=>{
    if(fav4)
    {
      setClick4(true)
      setfav4(false);
      dispatch(addToFav(TopSong[3]))
      setstate4(false);
    }
    else
    {
      setfav4(true)
      setstate4(true)
      setClick4(false)
      dispatch(removeToFav(TopSong[3]))
    }
  }  
  const handleChange5=()=>{
    if(fav5)
    {
      setClick5(true)
      setfav5(false);
      dispatch(addToFav(TopSong[4]))
      setstate5(false);
    }
    else
    {
      setfav5(true)
      setstate5(true)
      setClick5(false)
      dispatch(removeToFav(TopSong[4]))
    }
  }  
  const handleChange6=()=>{
    if(fav6)
    {
      setClick6(true)
      setfav6(false);
      dispatch(addToFav(TopSong[5]))
      setstate6(false);
    }
    else
    {
      setfav6(true)
      setstate6(true)
      setClick6(false)
      dispatch(removeToFav(TopSong[5]))
    }
  }  
  const handleChange7=()=>{
    if(fav7)
    {
      setClick7(true)
      setfav7(false);
      dispatch(addToFav(TopSong[6]))
      setstate7(false);
    }
    else
    {
      setfav7(true)
      setstate7(true)
      setClick7(false)
      dispatch(removeToFav(TopSong[6]))
    }
  }  
  const handleChange8=()=>{
    if(fav8)
    {
      setClick8(true)
      setfav8(false);
      dispatch(addToFav(TopSong[7]))
      setstate8(false);
    }
    else
    {
      setfav8(true)
      setstate8(true)
      setClick8(false)
      dispatch(removeToFav(TopSong[7]))
    }
  }  
  const handleChange9=()=>{
    if(fav9)
    {
      setClick9(true)
      setfav9(false);
      dispatch(addToFav(TopSong[8]))
      setstate9(false);
    }
    else
    {
      setfav9(true)
      setstate9(true)
      setClick9(false)
      dispatch(removeToFav(TopSong[8]))
    }
  }  
  const handleChange10=()=>{
    if(fav10)
    {
      setClick10(true)
      setfav10(false);
      dispatch(addToFav(TopSong[9]))
      setstate10(false);
    }
    else
    {
      setfav10(true)
      setstate10(true)
      setClick10(false)
      dispatch(removeToFav(TopSong[9]))
    }
  }  
  const handleChange11=()=>{
    if(fav11)
    {
      setClick11(true)
      setfav11(false);
      dispatch(addToFav(TopSong[10]))
      setstate11(false);
    }
    else
    {
      setfav11(true)
      setstate11(true)
      setClick11(false)
      dispatch(removeToFav(TopSong[10]))
    }
  }  
  const handleChange12=()=>{
    if(fav12)
    {
      setClick12(true)
      setfav12(false);
      dispatch(addToFav(TopSong[11]))
      setstate12(false);
    }
    else
    {
      setfav12(true)
      setstate12(true)
      setClick12(false)
      dispatch(removeToFav(TopSong[11]))
    }
  }  
  const handleChange13=()=>{
    if(fav13)
    {
      setClick13(true)
      setfav13(false);
      dispatch(addToFav(TopSong[12]))
      setstate13(false);
    }
    else
    {
      setfav13(true)
      setstate13(true)
      setClick13(false)
      dispatch(removeToFav(TopSong[12]))
    }
  }  
  const handleChange14=()=>{
    if(fav14)
    {
      setClick14(true)
      setfav14(false);
      dispatch(addToFav(TopSong[13]))
      setstate1(false);
    }
    else
    {
      setfav14(true)
      setstate14(true)
      setClick14(false)
      dispatch(removeToFav(TopSong[13]))
    }
  }  
  const handleChange15=()=>{
    if(fav15)
    {
      setClick15(true)
      setfav15(false);
      dispatch(addToFav(TopSong[14]))
      setstate15(false);
    }
    else
    {
      setfav15(true)
      setstate15(true)
      setClick15(false)
      dispatch(removeToFav(TopSong[14]))
    }
  }  
  const handleChange16=()=>{
    if(fav16)
    {
      setClick16(true)
      setfav16(false);
      dispatch(addToFav(TopSong[15]))
      setstate16(false);
    }
    else
    {
      setfav16(true)
      setstate16(true)
      setClick16(false)
      dispatch(removeToFav(TopSong[15]))
    }
  }  
  const handleChange17=()=>{
    if(fav17)
    {
      setClick17(true)
      setfav17(false);
      dispatch(addToFav(TopSong[16]))
      setstate17(false);
    }
    else
    {
      setfav17(true)
      setstate17(true)
      setClick17(false)
      dispatch(removeToFav(TopSong[16]))
    }
  }  
  const handleChange18=()=>{
    if(fav18)
    {
      setClick18(true)
      setfav18(false);
      dispatch(addToFav(TopSong[17]))
      setstate18(false);
    }
    else
    {
      setfav18(true)
      setstate18(true)
      setClick18(false)
      dispatch(removeToFav(TopSong[17]))
    }
  }  
  const handleChange19=()=>{
    if(fav19)
    {
      setClick19(true)
      setfav19(false);
      dispatch(addToFav(TopSong[18]))
      setstate19(false);
    }
    else
    {
      setfav19(true)
      setstate19(true)
      setClick19(false)
      dispatch(removeToFav(TopSong[18]))
    }
  }  
  const handleChange20=()=>{
    if(fav20)
    {
      setClick20(true)
      setfav20(false);
      dispatch(addToFav(TopSong[19]))
      setstate20(false);
    }
    else
    {
      setfav20(true)
      setstate20(true)
      setClick20(false)
      dispatch(removeToFav(TopSong[19]))
    }
  }  
  const handleChange21=()=>{
    if(fav21)
    {
      setClick21(true)
      setfav21(false);
      dispatch(addToFav(TopSong[20]))
      setstate21(false);
    }
    else
    {
      setfav21(true)
      setstate21(true)
      setClick21(false)
      dispatch(removeToFav(TopSong[20]))
    }
  }  
  const handleChange22=()=>{
    if(fav22)
    {
      setClick22(true)
      setfav22(false);
      dispatch(addToFav(TopSong[21]))
      setstate22(false);
    }
    else
    {
      setfav22(true)
      setstate22(true)
      setClick22(false)
      dispatch(removeToFav(TopSong[21]))
    }
  }  
  const handleChange23=()=>{
    if(fav23)
    {
      setClick23(true)
      setfav23(false);
      dispatch(addToFav(TopSong[22]))
      setstate23(false);
    }
    else
    {
      setfav23(true)
      setstate23(true)
      setClick23(false)
      dispatch(removeToFav(TopSong[22]))
    }
  }  
  const handleChange24=()=>{
    if(fav24)
    {
      setClick24(true)
      setfav24(false);
      dispatch(addToFav(TopSong[23]))
      setstate24(false);
    }
    else
    {
      setfav24(true)
      setstate24(true)
      setClick24(false)
      dispatch(removeToFav(TopSong[23]))
    }
  }  
  const handleChange25=()=>{
    if(fav25)
    {
      setClick25(true)
      setfav25(false);
      dispatch(addToFav(TopSong[24]))
      setstate25(false);
    }
    else
    {
      setfav25(true)
      setstate25(true)
      setClick25(false)
      dispatch(removeToFav(TopSong[24]))
    }
  }  
  const handleChange26=()=>{
    if(fav26)
    {
      setClick26(true)
      setfav26(false);
      dispatch(addToFav(TopSong[25]))
      setstate26(false);
    }
    else
    {
      setfav26(true)
      setstate26(true)
      setClick26(false)
      dispatch(removeToFav(TopSong[25]))
    }
  }  
  const handleChange27=()=>{
    if(fav27)
    {
      setClick27(true)
      setfav27(false);
      dispatch(addToFav(TopSong[26]))
      setstate27(false);
    }
    else
    {
      setfav27(true)
      setstate27(true)
      setClick27(false)
      dispatch(removeToFav(TopSong[26]))
    }
  }  
  const handleChange28=()=>{
    if(fav28)
    {
      setClick28(true)
      setfav28(false);
      dispatch(addToFav(TopSong[27]))
      setstate28(false);
    }
    else
    {
      setfav28(true)
      setstate28(true)
      setClick28(false)
      dispatch(removeToFav(TopSong[27]))
    }
  }  
  const handleChange29=()=>{
    if(fav29)
    {
      setClick29(true)
      setfav29(false);
      dispatch(addToFav(TopSong[28]))
      setstate29(false);
    }
    else
    {
      setfav29(true)
      setstate29(true)
      setClick29(false)
      dispatch(removeToFav(TopSong[28]))
    }
  }  
  const handleChange30=()=>{
    if(fav30)
    {
      setClick30(true)
      setfav30(false);
      dispatch(addToFav(TopSong[29]))
      setstate30(false);
    }
    else
    {
      setfav30(true)
      setstate30(true)
      setClick30(false)
      dispatch(removeToFav(TopSong[29]))
    }
  }  
  const handleChange31=()=>{
    if(fav31)
    {
      setClick31(true)
      setfav31(false);
      dispatch(addToFav(TopSong[30]))
      setstate31(false);
    }
    else
    {
      setfav31(true)
      setstate31(true)
      setClick31(false)
      dispatch(removeToFav(TopSong[30]))
    }
  }  
  const handleChange32=()=>{
    if(fav32)
    {
      setClick32(true)
      setfav32(false);
      dispatch(addToFav(TopSong[31]))
      setstate32(false);
    }
    else
    {
      setfav32(true)
      setstate32(true)
      setClick32(false)
      dispatch(removeToFav(TopSong[31]))
    }
  }  
  const handleChange33=()=>{
    if(fav33)
    {
      setClick33(true)
      setfav33(false);
      dispatch(addToFav(TopSong[32]))
      setstate33(false);
    }
    else
    {
      setfav33(true)
      setstate33(true)
      setClick33(false)
      dispatch(removeToFav(TopSong[32]))
    }
  }  
  const handleChange34=()=>{
    if(fav34)
    {
      setClick34(true)
      setfav34(false);
      dispatch(addToFav(TopSong[33]))
      setstate34(false);
    }
    else
    {
      setfav34(true)
      setstate34(true)
      setClick34(false)
      dispatch(removeToFav(TopSong[33]))
    }
  }  
  const handleChange35=()=>{
    if(fav35)
    {
      setClick35(true)
      setfav35(false);
      dispatch(addToFav(TopSong[34]))
      setstate35(false);
    }
    else
    {
      setfav35(true)
      setstate35(true)
      setClick35(false)
      dispatch(removeToFav(TopSong[34]))
    }
  }  
  const handleChange36=()=>{
    if(fav36)
    {
      setClick36(true)
      setfav36(false);
      dispatch(addToFav(TopSong[35]))
      setstate36(false);
    }
    else
    {
      setfav36(true)
      setstate36(true)
      setClick36(false)
      dispatch(removeToFav(TopSong[35]))
    }
  }  
  const handleChange37=()=>{
    if(fav37)
    {
      setClick37(true)
      setfav37(false);
      dispatch(addToFav(TopSong[36]))
      setstate37(false);
    }
    else
    {
      setfav37(true)
      setstate37(true)
      setClick37(false)
      dispatch(removeToFav(TopSong[36]))
    }
  }  
  const handleChange38=()=>{
    if(fav38)
    {
      setClick38(true)
      setfav38(false);
      dispatch(addToFav(TopSong[37]))
      setstate38(false);
    }
    else
    {
      setfav38(true)
      setstate38(true)
      setClick38(false)
      dispatch(removeToFav(TopSong[37]))
    }
  }  
  const handleChange39=()=>{
    if(fav39)
    {
      setClick39(true)
      setfav39(false);
      dispatch(addToFav(TopSong[38]))
      setstate39(false);
    }
    else
    {
      setfav39(true)
      setstate39(true)
      setClick39(false)
      dispatch(removeToFav(TopSong[38]))
    }
  }  
  const handleChange40=()=>{
    if(fav40)
    {
      setClick40(true)
      setfav40(false);
      dispatch(addToFav(TopSong[39]))
      setstate40(false);
    }
    else
    {
      setfav40(true)
      setstate40(true)
      setClick40(false)
      dispatch(removeToFav(TopSong[39]))
    }
  }  
  const handleChange41=()=>{
    if(fav41)
    {
      setClick41(true)
      setfav41(false);
      dispatch(addToFav(TopSong[40]))
      setstate41(false);
    }
    else
    {
      setfav41(true)
      setstate41(true)
      setClick41(false)
      dispatch(removeToFav(TopSong[40]))
    }
  }  
  const handleChange42=()=>{
    if(fav42)
    {
      setClick42(true)
      setfav42(false);
      dispatch(addToFav(TopSong[41]))
      setstate42(false);
    }
    else
    {
      setfav42(true)
      setstate42(true)
      setClick42(false)
      dispatch(removeToFav(TopSong[41]))
    }
  }  
  const handleChange43=()=>{
    if(fav43)
    {
      setClick43(true)
      setfav43(false);
      dispatch(addToFav(TopSong[42]))
      setstate43(false);
    }
    else
    {
      setfav43(true)
      setstate43(true)
      setClick43(false)
      dispatch(removeToFav(TopSong[42]))
    }
  }  
  const handleChange44=()=>{
    if(fav44)
    {
      setClick44(true)
      setfav44(false);
      dispatch(addToFav(TopSong[43]))
      setstate44(false);
    }
    else
    {
      setfav44(true)
      setstate44(true)
      setClick44(false)
      dispatch(removeToFav(TopSong[43]))
    }
  }  
  const handleChange45=()=>{
    if(fav45)
    {
      setClick45(true)
      setfav45(false);
      dispatch(addToFav(TopSong[44]))
      setstate45(false);
    }
    else
    {
      setfav45(true)
      setstate45(true)
      setClick45(false)
      dispatch(removeToFav(TopSong[44]))
    }
  }  
  const handleChange46=()=>{
    if(fav46)
    {
      setClick46(true)
      setfav46(false);
      dispatch(addToFav(TopSong[45]))
      setstate46(false);
    }
    else
    {
      setfav46(true)
      setstate46(true)
      setClick46(false)
      dispatch(removeToFav(TopSong[45]))
    }
  }  
  const handleChange47=()=>{
    if(fav47)
    {
      setClick47(true)
      setfav47(false);
      dispatch(addToFav(TopSong[46]))
      setstate47(false);
    }
    else
    {
      setfav47(true)
      setstate47(true)
      setClick47(false)
      dispatch(removeToFav(TopSong[46]))
    }
  }  
  const handleChange48=()=>{
    if(fav48)
    {
      setClick48(true)
      setfav48(false);
      dispatch(addToFav(TopSong[47]))
      setstate48(false);
    }
    else
    {
      setfav48(true)
      setstate48(true)
      setClick48(false)
      dispatch(removeToFav(TopSong[47]))
    }
  }  
  const handleChange49=()=>{
    if(fav49)
    {
      setClick49(true)
      setfav49(false);
      dispatch(addToFav(TopSong[48]))
      setstate49(false);
    }
    else
    {
      setfav49(true)
      setstate49(true)
      setClick49(false)
      dispatch(removeToFav(TopSong[48]))
    }
  }  
  const handleChange50=()=>{
    if(fav50)
    {
      setClick50(true)
      setfav50(false);
      dispatch(addToFav(TopSong[49]))
      setstate50(false);
    }
    else
    {
      setfav50(true)
      setstate50(true)
      setClick50(false)
      dispatch(removeToFav(TopSong[49]))
    }
  }  
  useEffect(()=>{
    if(!fav1 || state1)
    {
      window.localStorage.setItem('Top_1',JSON.stringify(click1))
      window.localStorage.setItem('Top_state1',JSON.stringify(fav1))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_1');
  const get1 = window.localStorage.getItem('Top_state1');
  setClick1(JSON.parse(get));
  setfav1(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav2 || state2)
    {
      window.localStorage.setItem('Top_2',JSON.stringify(click2))
      window.localStorage.setItem('Top_state2',JSON.stringify(fav2))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_2');
  const get1 = window.localStorage.getItem('Top_state2');
  setClick2(JSON.parse(get));
  setfav2(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav3 || state3)
    {
      window.localStorage.setItem('Top_3',JSON.stringify(click3))
      window.localStorage.setItem('Top_state3',JSON.stringify(fav3))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_3');
  const get1 = window.localStorage.getItem('Top_state3');
  setClick3(JSON.parse(get));
  setfav3(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav4 || state4)
    {
      window.localStorage.setItem('Top_4',JSON.stringify(click4))
      window.localStorage.setItem('Top_state4',JSON.stringify(fav4))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_4');
  const get1 = window.localStorage.getItem('Top_state4');
  setClick4(JSON.parse(get));
  setfav4(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav5 || state5)
    {
      window.localStorage.setItem('Top_5',JSON.stringify(click5))
      window.localStorage.setItem('Top_state5',JSON.stringify(fav5))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_5');
  const get1 = window.localStorage.getItem('Top_state5');
  setClick5(JSON.parse(get));
  setfav5(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav6 || state6)
    {
      window.localStorage.setItem('Top_6',JSON.stringify(click6))
      window.localStorage.setItem('Top_state6',JSON.stringify(fav6))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_6');
  const get1 = window.localStorage.getItem('Top_state6');
  setClick6(JSON.parse(get));
  setfav6(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav7 || state7)
    {
      window.localStorage.setItem('Top_7',JSON.stringify(click7))
      window.localStorage.setItem('Top_state7',JSON.stringify(fav7))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_7');
  const get1 = window.localStorage.getItem('Top_state7');
  setClick7(JSON.parse(get));
  setfav7(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav8 || state8)
    {
      window.localStorage.setItem('Top_8',JSON.stringify(click8))
      window.localStorage.setItem('Top_state8',JSON.stringify(fav8))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_8');
  const get1 = window.localStorage.getItem('Top_state8');
  setClick8(JSON.parse(get));
  setfav8(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav9 || state9)
    {
      window.localStorage.setItem('Top_9',JSON.stringify(click9))
      window.localStorage.setItem('Top_state9',JSON.stringify(fav9))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_9');
  const get1 = window.localStorage.getItem('Top_state9');
  setClick9(JSON.parse(get));
  setfav9(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav10 || state10)
    {
      window.localStorage.setItem('Top_10',JSON.stringify(click10))
      window.localStorage.setItem('Top_state10',JSON.stringify(fav10))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_10');
  const get1 = window.localStorage.getItem('Top_state10');
  setClick10(JSON.parse(get));
  setfav10(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav11 || state11)
    {
      window.localStorage.setItem('Top_11',JSON.stringify(click11))
      window.localStorage.setItem('Top_state11',JSON.stringify(fav11))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_11');
  const get1 = window.localStorage.getItem('Top_state11');
  setClick11(JSON.parse(get));
  setfav11(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav12 || state12)
    {
      window.localStorage.setItem('Top_12',JSON.stringify(click12))
      window.localStorage.setItem('Top_state12',JSON.stringify(fav12))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_12');
  const get1 = window.localStorage.getItem('Top_state12');
  setClick12(JSON.parse(get));
  setfav12(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav13 || state13)
    {
      window.localStorage.setItem('Top_13',JSON.stringify(click13))
      window.localStorage.setItem('Top_state13',JSON.stringify(fav13))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_13');
  const get1 = window.localStorage.getItem('Top_state13');
  setClick13(JSON.parse(get));
  setfav13(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav14 || state14)
    {
      window.localStorage.setItem('Top_14',JSON.stringify(click14))
      window.localStorage.setItem('Top_state14',JSON.stringify(fav14))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_14');
  const get1 = window.localStorage.getItem('Top_state14');
  setClick14(JSON.parse(get));
  setfav14(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav15 || state15)
    {
      window.localStorage.setItem('Top_15',JSON.stringify(click15))
      window.localStorage.setItem('Top_state15',JSON.stringify(fav15))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_15');
  const get1 = window.localStorage.getItem('Top_state15');
  setClick15(JSON.parse(get));
  setfav15(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav16 || state16)
    {
      window.localStorage.setItem('Top_16',JSON.stringify(click16))
      window.localStorage.setItem('Top_state16',JSON.stringify(fav16))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_16');
  const get1 = window.localStorage.getItem('Top_state16');
  setClick16(JSON.parse(get));
  setfav16(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav17 || state17)
    {
      window.localStorage.setItem('Top_17',JSON.stringify(click17))
      window.localStorage.setItem('Top_state17',JSON.stringify(fav17))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_17');
  const get1 = window.localStorage.getItem('Top_state17');
  setClick17(JSON.parse(get));
  setfav17(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav18 || state18)
    {
      window.localStorage.setItem('Top_18',JSON.stringify(click18))
      window.localStorage.setItem('Top_state18',JSON.stringify(fav18))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_18');
  const get1 = window.localStorage.getItem('Top_state18');
  setClick18(JSON.parse(get));
  setfav18(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav19 || state19)
    {
      window.localStorage.setItem('Top_19',JSON.stringify(click19))
      window.localStorage.setItem('Top_state19',JSON.stringify(fav19))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_19');
  const get1 = window.localStorage.getItem('Top_state19');
  setClick19(JSON.parse(get));
  setfav19(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav20 || state20)
    {
      window.localStorage.setItem('Top_20',JSON.stringify(click20))
      window.localStorage.setItem('Top_state20',JSON.stringify(fav20))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_20');
  const get1 = window.localStorage.getItem('Top_state20');
  setClick20(JSON.parse(get));
  setfav20(JSON.parse(get1));
  },[])


  useEffect(()=>{
    if(!fav21 || state21)
    {
      window.localStorage.setItem('Top_21',JSON.stringify(click21))
      window.localStorage.setItem('Top_state21',JSON.stringify(fav21))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_21');
  const get1 = window.localStorage.getItem('Top_state21');
  setClick21(JSON.parse(get));
  setfav21(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav22 || state22)
    {
      window.localStorage.setItem('Top_22',JSON.stringify(click22))
      window.localStorage.setItem('Top_state22',JSON.stringify(fav22))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_22');
  const get1 = window.localStorage.getItem('Top_state22');
  setClick22(JSON.parse(get));
  setfav22(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav23 || state23)
    {
      window.localStorage.setItem('Top_23',JSON.stringify(click23))
      window.localStorage.setItem('Top_state23',JSON.stringify(fav23))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_23');
  const get1 = window.localStorage.getItem('Top_state23');
  setClick23(JSON.parse(get));
  setfav23(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav24 || state24)
    {
      window.localStorage.setItem('Top_24',JSON.stringify(click24))
      window.localStorage.setItem('Top_state24',JSON.stringify(fav24))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_24');
  const get1 = window.localStorage.getItem('Top_state24');
  setClick24(JSON.parse(get));
  setfav24(JSON.parse(get1));
  },[])


  useEffect(()=>{
    if(!fav25 || state25)
    {
      window.localStorage.setItem('Top_25',JSON.stringify(click25))
      window.localStorage.setItem('Top_state25',JSON.stringify(fav25))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_25');
  const get1 = window.localStorage.getItem('Top_state25');
  setClick25(JSON.parse(get));
  setfav25(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav26 || state26)
    {
      window.localStorage.setItem('Top_26',JSON.stringify(click26))
      window.localStorage.setItem('Top_state26',JSON.stringify(fav26))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_26');
  const get1 = window.localStorage.getItem('Top_state26');
  setClick26(JSON.parse(get));
  setfav26(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav27 || state27)
    {
      window.localStorage.setItem('Top_27',JSON.stringify(click27))
      window.localStorage.setItem('Top_state27',JSON.stringify(fav27))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_27');
  const get1 = window.localStorage.getItem('Top_state27');
  setClick27(JSON.parse(get));
  setfav27(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav28 || state28)
    {
      window.localStorage.setItem('Top_28',JSON.stringify(click28))
      window.localStorage.setItem('Top_state28',JSON.stringify(fav28))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_28');
  const get1 = window.localStorage.getItem('Top_state28');
  setClick28(JSON.parse(get));
  setfav28(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav29 || state29)
    {
      window.localStorage.setItem('Top_29',JSON.stringify(click29))
      window.localStorage.setItem('Top_state29',JSON.stringify(fav29))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_29');
  const get1 = window.localStorage.getItem('Top_state29');
  setClick29(JSON.parse(get));
  setfav29(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav30 || state30)
    {
      window.localStorage.setItem('Top_30',JSON.stringify(click30))
      window.localStorage.setItem('Top_state30',JSON.stringify(fav30))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_30');
  const get1 = window.localStorage.getItem('Top_state30');
  setClick30(JSON.parse(get));
  setfav30(JSON.parse(get1));
  },[])


  useEffect(()=>{
    if(!fav31 || state31)
    {
      window.localStorage.setItem('Top_31',JSON.stringify(click31))
      window.localStorage.setItem('Top_state31',JSON.stringify(fav31))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_31');
  const get1 = window.localStorage.getItem('Top_state31');
  setClick31(JSON.parse(get));
  setfav31(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav32 || state32)
    {
      window.localStorage.setItem('Top_32',JSON.stringify(click32))
      window.localStorage.setItem('Top_state32',JSON.stringify(fav32))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_32');
  const get1 = window.localStorage.getItem('Top_state32');
  setClick32(JSON.parse(get));
  setfav32(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav33 || state33)
    {
      window.localStorage.setItem('Top_33',JSON.stringify(click33))
      window.localStorage.setItem('Top_state33',JSON.stringify(fav33))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_33');
  const get1 = window.localStorage.getItem('Top_state33');
  setClick33(JSON.parse(get));
  setfav33(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav34 || state34)
    {
      window.localStorage.setItem('Top_34',JSON.stringify(click34))
      window.localStorage.setItem('Top_state34',JSON.stringify(fav34))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_34');
  const get1 = window.localStorage.getItem('Top_state34');
  setClick34(JSON.parse(get));
  setfav34(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav35 || state35)
    {
      window.localStorage.setItem('Top_35',JSON.stringify(click35))
      window.localStorage.setItem('Top_state35',JSON.stringify(fav35))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_35');
  const get1 = window.localStorage.getItem('Top_state35');
  setClick35(JSON.parse(get));
  setfav35(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav36 || state36)
    {
      window.localStorage.setItem('Top_36',JSON.stringify(click36))
      window.localStorage.setItem('Top_state36',JSON.stringify(fav36))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_36');
  const get1 = window.localStorage.getItem('Top_state36');
  setClick36(JSON.parse(get));
  setfav36(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav37 || state37)
    {
      window.localStorage.setItem('Top_37',JSON.stringify(click37))
      window.localStorage.setItem('Top_state37',JSON.stringify(fav37))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_37');
  const get1 = window.localStorage.getItem('Top_state37');
  setClick37(JSON.parse(get));
  setfav37(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav38 || state38)
    {
      window.localStorage.setItem('Top_38',JSON.stringify(click38))
      window.localStorage.setItem('Top_state38',JSON.stringify(fav38))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_38');
  const get1 = window.localStorage.getItem('Top_state38');
  setClick38(JSON.parse(get));
  setfav38(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav39 || state39)
    {
      window.localStorage.setItem('Top_39',JSON.stringify(click39))
      window.localStorage.setItem('Top_state39',JSON.stringify(fav39))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_39');
  const get1 = window.localStorage.getItem('Top_state39');
  setClick39(JSON.parse(get));
  setfav39(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav40 || state40)
    {
      window.localStorage.setItem('Top_40',JSON.stringify(click40))
      window.localStorage.setItem('Top_state40',JSON.stringify(fav40))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_40');
  const get1 = window.localStorage.getItem('Top_state40');
  setClick40(JSON.parse(get));
  setfav40(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav41 || state41)
    {
      window.localStorage.setItem('Top_41',JSON.stringify(click41))
      window.localStorage.setItem('Top_state41',JSON.stringify(fav41))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_41');
  const get1 = window.localStorage.getItem('Top_state41');
  setClick41(JSON.parse(get));
  setfav41(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav42 || state42)
    {
      window.localStorage.setItem('Top_42',JSON.stringify(click42))
      window.localStorage.setItem('Top_state42',JSON.stringify(fav42))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_42');
  const get1 = window.localStorage.getItem('Top_state42');
  setClick42(JSON.parse(get));
  setfav42(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav43 || state43)
    {
      window.localStorage.setItem('Top_43',JSON.stringify(click43))
      window.localStorage.setItem('Top_state43',JSON.stringify(fav43))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_43');
  const get1 = window.localStorage.getItem('Top_state43');
  setClick43(JSON.parse(get));
  setfav43(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav44 || state44)
    {
      window.localStorage.setItem('Top_44',JSON.stringify(click44))
      window.localStorage.setItem('Top_state44',JSON.stringify(fav44))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_44');
  const get1 = window.localStorage.getItem('Top_state44');
  setClick44(JSON.parse(get));
  setfav44(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav45 || state45)
    {
      window.localStorage.setItem('Top_45',JSON.stringify(click45))
      window.localStorage.setItem('Top_state45',JSON.stringify(fav45))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_45');
  const get1 = window.localStorage.getItem('Top_state45');
  setClick45(JSON.parse(get));
  setfav45(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav46 || state46)
    {
      window.localStorage.setItem('Top_46',JSON.stringify(click46))
      window.localStorage.setItem('Top_state46',JSON.stringify(fav46))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_46');
  const get1 = window.localStorage.getItem('Top_state46');
  setClick46(JSON.parse(get));
  setfav46(JSON.parse(get1));
  },[])

  useEffect(()=>{
    if(!fav47 || state47)
    {
      window.localStorage.setItem('Top_47',JSON.stringify(click47))
      window.localStorage.setItem('Top_state47',JSON.stringify(fav47))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_47');
  const get1 = window.localStorage.getItem('Top_state47');
  setClick47(JSON.parse(get));
  setfav47(JSON.parse(get1));
  },[]) 
  
  useEffect(()=>{
    if(!fav48 || state48)
    {
      window.localStorage.setItem('Top_48',JSON.stringify(click48))
      window.localStorage.setItem('Top_state48',JSON.stringify(fav48))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_48');
  const get1 = window.localStorage.getItem('Top_state48');
  setClick48(JSON.parse(get));
  setfav48(JSON.parse(get1));
  },[])
  useEffect(()=>{
    if(!fav49 || state49)
    {
      window.localStorage.setItem('Top_49',JSON.stringify(click49))
      window.localStorage.setItem('Top_state49',JSON.stringify(fav49))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_49');
  const get1 = window.localStorage.getItem('Top_state49');
  setClick49(JSON.parse(get));
  setfav49(JSON.parse(get1));
  },[])
  useEffect(()=>{
    if(!fav50 || state50)
    {
      window.localStorage.setItem('Top_50',JSON.stringify(click50))
      window.localStorage.setItem('Top_state50',JSON.stringify(fav50))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('Top_50');
  const get1 = window.localStorage.getItem('Top_state50');
  setClick50(JSON.parse(get));
  setfav50(JSON.parse(get1));
  },[])

  return(
    <>

    <div className="TopLike1" onClick={handleChange1}>
        {
            click1?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike2" onClick={handleChange2}>
        {
            click2?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike3" onClick={handleChange3}>
        {
            click3?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike4" onClick={handleChange4}>
        {
            click4?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike5" onClick={handleChange5}>
        {
            click5?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike6" onClick={handleChange6}>
        {
            click6?<Icon/>:<NotIcon/>
        }
    </div>
     <div className="TopLike7" onClick={handleChange7}>
        {
            click7?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike8" onClick={handleChange8}>
        {
            click8?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike9" onClick={handleChange9}>
        {
            click9?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike10" onClick={handleChange10}>
        {
            click10?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike11" onClick={handleChange11}>
        {
            click11?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike12" onClick={handleChange12}>
        {
            click12?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike13" onClick={handleChange13}>
        {
            click13?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike14" onClick={handleChange14}>
        {
            click14?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike15" onClick={handleChange15}>
        {
            click15?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike16" onClick={handleChange16}>
        {
            click16?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike17" onClick={handleChange17}>
        {
            click17?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike18" onClick={handleChange18}>
        {
            click18?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike19" onClick={handleChange19}>
        {
            click19?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike20" onClick={handleChange20}>
        {
            click20?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike21" onClick={handleChange21}>
        {
            click21?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike22" onClick={handleChange22}>
        {
            click22?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike23" onClick={handleChange23}>
        {
            click23?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike24" onClick={handleChange24}>
        {
            click24?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike25" onClick={handleChange25}>
        {
            click25?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike26" onClick={handleChange26}>
        {
            click26?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike27" onClick={handleChange27}>
        {
            click27?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike28" onClick={handleChange28}>
        {
            click28?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike29" onClick={handleChange29}>
        {
            click29?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike30" onClick={handleChange30}>
        {
            click30?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike31" onClick={handleChange31}>
        {
            click31?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike32" onClick={handleChange32}>
        {
            click32?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike33" onClick={handleChange33}>
        {
            click33?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike34" onClick={handleChange34}>
        {
            click34?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike35" onClick={handleChange35}>
        {
            click35?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike36" onClick={handleChange36}>
        {
            click36?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike37" onClick={handleChange37}>
        {
            click37?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike38" onClick={handleChange38}>
        {
            click38?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike39" onClick={handleChange39}>
        {
            click39?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike40" onClick={handleChange40}>
        {
            click40?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike41" onClick={handleChange41}>
        {
            click41?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike42" onClick={handleChange42}>
        {
            click42?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike43" onClick={handleChange43}>
        {
            click43?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike44" onClick={handleChange44}>
        {
            click44?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike45" onClick={handleChange45}>
        {
            click45?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike46" onClick={handleChange46}>
        {
            click46?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike47" onClick={handleChange47}>
        {
            click47?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike48" onClick={handleChange48}>
        {
            click48?<Icon/>:<NotIcon/>
        }
    </div>
   <div className="TopLike49" onClick={handleChange49}>
        {
            click49?<Icon/>:<NotIcon/>
        }
    </div>
    <div className="TopLike50" onClick={handleChange50}>
        {
            click50?<Icon/>:<NotIcon/>
        }
    </div>
    </>
  )
}

export default HomeLike;