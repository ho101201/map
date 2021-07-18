import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';

const App = props => {
  const [Mapo,setMapo] = useState(true);
  const toggleMapo = () => {
    setMapo(prev => !prev)
}
const [Eunpyung,setEunpyung] = useState(true);
  const toggleEunpyung = () => {
    setEunpyung(prev => !prev)
}
const [Seodaemoon,setSeodaemoon] = useState(true);
  const toggleSeodaemoon = () => {
    setSeodaemoon(prev => !prev)
}
const [Yongsan,setYongsan] = useState(true);
  const toggleYongsan = () => {
    setYongsan(prev => !prev)
}
const [Jongro,setJongro] = useState(true);
  const toggleJongro = () => {
    setJongro(prev => !prev)
}
const [Joongu,setJoongu] = useState(true);
  const toggleJoongu = () => {
    setJoongu(prev => !prev)
}
const [Sungbook,setSungbook] = useState(true);
  const toggleSungbook = () => {
    setSungbook(prev => !prev)
}
const [Gangbook,setGangbook] = useState(true);
  const toggleGangbook = () => {
    setGangbook(prev => !prev)
}
const [Dobong,setDobong] = useState(true);
  const toggleDobong = () => {
    setDobong(prev => !prev)
}
const [Sungdong,setSungdong] = useState(true);
  const toggleSungdong = () => {
    setSungdong(prev => !prev)
}
const [Dongdaemoon,setDongdaemoon] = useState(true);
  const toggleDongdaemoon = () => {
    setDongdaemoon(prev => !prev)
}
const [Nowon,setNowon] = useState(true);
  const toggleNowon = () => {
    setNowon(prev => !prev)
}
const [Joongryang,setJoongryang] = useState(true);
  const toggleJoongryang = () => {
    setJoongryang(prev => !prev)
}
const [Gwangjin,setGwangjin] = useState(true);
  const toggleGwangjin = () => {
    setGwangjin(prev => !prev)
}
const [Gangseo,setGangseo] = useState(true);
  const toggleGangseo = () => {
    setGangseo(prev => !prev)
}
const [Gooro,setGooro] = useState(true);
  const toggleGooro = () => {
    setGooro(prev => !prev)
}
const [Yangcheon,setYangcheon] = useState(true);
  const toggleYangcheon = () => {
    setYangcheon(prev => !prev)
}
const [Geumcheon,setGeumcheon] = useState(true);
  const toggleGeumcheon = () => {
    setGeumcheon(prev => !prev)
}
const [Yeongdeungpo,setYeongdeungpo] = useState(true);
  const toggleYeongdeungpo = () => {
    setYeongdeungpo(prev => !prev)
}
const [Dongjak,setDongjak] = useState(true);
  const toggleDongjak = () => {
    setDongjak(prev => !prev)
}
const [Gwanak,setGwanak] = useState(true);
  const toggleGwanak = () => {
    setGwanak(prev => !prev)
}
const [Seocho,setSeocho] = useState(true);
  const toggleSeocho = () => {
    setSeocho(prev => !prev)
}
const [Gangnam,setGangnam] = useState(true);
  const toggleGangnam = () => {
    setGangnam(prev => !prev)
}
const [Songpa,setSongpa] = useState(true);
  const toggleSongpa = () => {
    setSongpa(prev => !prev)
}
const [Gangdong,setGangdong] = useState(true);
  const toggleGangdong = () => {
    setGangdong(prev => !prev)
}
  return (
  <View>

    <View style={{position:'absolute', marginLeft:150}} >
      <Image style={{ width:Dimensions.get('window').width, height:355 ,resizeMode:'contain' }} source={require('./src/images/whiteMap.png')} />
      <Image style={{ position:'absolute', width:380, height:149 ,resizeMode:'stretch',bottom:109, left:212 }} source={require('./src/images/한강.png')} />
      
      {Mapo === true?
        <Image style={{ position:'absolute', width:96, height:80 ,resizeMode:'cover',top:129, left:276 }} source={require('./src/images/마포구.png')} />
      :
      null
      }

      {Eunpyung === true?
        <Image style={{ position:'absolute', width:110, height:102 ,resizeMode:'contain', top:48, left:284}} source={require('./src/images/은평구.png')} />
      :
      null
      }

      {Seodaemoon === true?
        <Image style={{ position:'absolute', width:70, height:70 ,resizeMode:'stretch',top:110, left:312}} source={require('./src/images/서대문구.png')} />
      :
      null
      }

      {Yongsan === true?
        <Image style={{ position:'absolute', width:75, height:55 ,resizeMode:'stretch',top:183, left:352.5}} source={require('./src/images/용산구.png')} />
      :
      null
      }
      
      {Jongro === true?
        <Image style={{ position:'absolute', width:72, height:84 ,resizeMode:'stretch',top:86, left:366}} source={require('./src/images/종로구.png')} />
      :
      null
      }

      {Joongu === true?
        <Image style={{ position:'absolute', width:72, height:43 ,resizeMode:'stretch',top:165, left:367}} source={require('./src/images/중구.png')} /> 
      :
      null
      }

      {Sungbook === true?
        <Image style={{ position:'absolute', width:98, height:76 ,resizeMode:'stretch',top:83, right:282}} source={require('./src/images/성북구.png')} /> 
      :
      null
      }

      
      {Gangbook === true?
        <Image style={{ position:'absolute', width:74, height:100 ,resizeMode:'stretch',top:19, right:299}} source={require('./src/images/강북구.png')} />
      :
      null
      }

      {Dobong === true?
        <Image style={{ position:'absolute', width:56, height:95 ,resizeMode:'stretch',top:0, right:285}} source={require('./src/images/도봉구.png')} />
      :
      null
      }

      {Sungdong === true?
        <Image style={{ position:'absolute', width:71, height:56 ,resizeMode:'stretch',top:167, right:285}} source={require('./src/images/성동구.png')} />  
      :
      null
      }
      
      {Dongdaemoon === true?
        <Image style={{ position:'absolute', width:65, height:62 ,resizeMode:'stretch',top:125, right:276}} source={require('./src/images/동대문구.png')} />
      :
      null
      }

      {Nowon === true?
        <Image style={{ position:'absolute', width:69, height:110 ,resizeMode:'stretch',top:10, right:236}} source={require('./src/images/노원구.png')} />
      :
      null
      }

      {Joongryang === true?
        <Image style={{ position:'absolute', width:60, height:70 ,resizeMode:'stretch',top:108, right:226}} source={require('./src/images/중량구.png')} /> 
      :
      null
      }
      
      {Gwangjin === true?
        <Image style={{ position:'absolute', width:66, height:64 ,resizeMode:'stretch',top:169, right:240}} source={require('./src/images/광진구.png')} />
      :
      null
      }

      
      {Gangseo === true?
        <Image style={{position:'absolute',bottom:146, left:174,width:120, height:106 ,resizeMode:'stretch'}} source={require('./src/images/강서구.png')} />
      :
      null
      }

      {Gooro === true?
        <Image style={{ position:'absolute', width:93, height:52 ,resizeMode:'stretch',bottom:79, left:214}} source={require('./src/images/구로구.png')} />
      :
      null
      }

      {Yangcheon === true?
        <Image style={{ position:'absolute', width:73, height:59 ,resizeMode:'stretch',bottom:117, left:225}} source={require('./src/images/양천구.png')} />
      :
      null
      }
      
      {Geumcheon === true?
        <Image style={{ position:'absolute', width:54, height:72 ,resizeMode:'stretch',bottom:21, left:273}} source={require('./src/images/금천구.png')} />
      :
      null
      }


      {Yeongdeungpo === true?
        <Image style={{ position:'absolute', width:68, height:87 ,resizeMode:'stretch',bottom:91, left:284}} source={require('./src/images/영등포구.png')} />
      :
      null
      }

      {Dongjak === true?
        <Image style={{ position:'absolute', width:82, height:55 ,resizeMode:'stretch',bottom:72, left:304}} source={require('./src/images/동작구.png')} />
      :
      null
      }

      {Gwanak === true?
        <Image style={{ position:'absolute', width:91, height:78 ,resizeMode:'stretch',bottom:20, left:299}} source={require('./src/images/관악구.png')} />
      :
      null
      }

      {Seocho === true?
        <Image style={{ position:'absolute', width:122, height:127 ,resizeMode:'stretch',bottom:2, right:270}} source={require('./src/images/서초구.png')} />
      :
      null
      }
      
      {Gangnam === true?
        <Image style={{ position:'absolute', width:105, height:110 ,resizeMode:'contain',bottom:33, left:420}} source={require('./src/images/강남구.png')} />
      :
      null
      }


      {Songpa === true?
        <Image style={{ position:'absolute', width:105, height:110 ,resizeMode:'stretch',bottom:34, right:192}} source={require('./src/images/송파구.png')} />
      :
      null
      }

      {Gangdong === true?
        <Image style={{ position:'absolute', width:75, height:74 ,resizeMode:'cover',bottom:110, right:175}} source={require('./src/images/강동구.png')} />
      :
      null
      }
    </View>
    
    <View style={{position:'absolute'}}>
      <View style={{flexDirection:'row', marginTop:4}}>
        <TouchableOpacity onPress={toggleMapo} style={{ width:50, height:40, backgroundColor:'#C5000B', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>마포</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleEunpyung} style={{ width:50, height:40, backgroundColor:'red', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>은평</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleSeodaemoon} style={{ width:50, height:40, backgroundColor:'#C5000B', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>서대</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleYongsan} style={{ width:50, height:40, backgroundColor:'red', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>용산</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={toggleJongro} style={{ width:50, height:40, backgroundColor:'#C5000B', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>종로</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleJoongu} style={{ width:50, height:40, backgroundColor:'red', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>중구</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleSungbook} style={{ width:50, height:40, backgroundColor:'#C5000B', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>성북</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleGangbook} style={{ width:50, height:40, backgroundColor:'red', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>강북</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={toggleDobong} style={{ width:50, height:40, backgroundColor:'#C5000B', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>도봉</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleSungdong} style={{ width:50, height:40, backgroundColor:'red', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>성동</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleDongdaemoon} style={{ width:50, height:40, backgroundColor:'#C5000B', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>동대</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleNowon} style={{ width:50, height:40, backgroundColor:'red', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>노원</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={toggleJoongryang} style={{ width:50, height:40, backgroundColor:'#C5000B', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>중량</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleGwangjin} style={{ width:50, height:40, backgroundColor:'red', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>광진</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', marginTop:10}}>
        <TouchableOpacity onPress={toggleGangseo} style={{ width:50, height:40, backgroundColor:'blue', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>강서</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleGooro} style={{ width:50, height:40, backgroundColor:'#0080FF', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>구로</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleYangcheon} style={{ width:50, height:40, backgroundColor:'blue', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>양천</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleGeumcheon} style={{ width:50, height:40, backgroundColor:'#0080FF', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>금천</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={toggleYeongdeungpo} style={{ width:50, height:40, backgroundColor:'blue', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>영등</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleDongjak} style={{ width:50, height:40, backgroundColor:'#0080FF', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>동작</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleGwanak} style={{ width:50, height:40, backgroundColor:'blue', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>관악</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleSeocho} style={{ width:50, height:40, backgroundColor:'#0080FF', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>서초</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={toggleGangnam} style={{ width:50, height:40, backgroundColor:'blue', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>강남</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleSongpa} style={{ width:50, height:40, backgroundColor:'#0080FF', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>송파</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleGangdong} style={{ width:50, height:40, backgroundColor:'blue', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:12, marginLeft:16}}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>강동</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

export default App;
