import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions, Pressable } from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import StopwatchTimer, {
  StopwatchTimerMethods,
} from 'react-native-animated-stopwatch-timer';
import { medium } from '../../components/constants/fonts';
const HomeScreen = () => {

  const { width, height } = useWindowDimensions()
  const translateY = useSharedValue(0)
  const translateX = useSharedValue(0)
  const runnerX = useRef<any>(0)
  const opacity = useSharedValue(1)
  const runner: any = useRef();
  const bgRef: any = useRef();
  const enRef: any = useRef();
  const stopwatchTimerRef = useRef<StopwatchTimerMethods>(null);
  const boardColor = useSharedValue("#fff");
  const boardHeight = useSharedValue(60);
  const boardTranslateY = useSharedValue(0);
  const textOpacity = useSharedValue(0)

  useEffect(() => {
    translateX.value = withRepeat(withTiming(-width, { duration: 3000 }, () => {
      opacity.value = opacity.value == 0 ? 1 : 0
    }), -1, true);
  }, [translateX]);

  useEffect(() => {
    stopwatchTimerRef.current?.play();
    setInterval(() => {
      if (runnerX.current) {
        runnerX.current.measure((x: any, y: any, width: any, height: any, pageX: any, pageY: any) => {
          let a = pageX + 10
          let b = pageX - 10
          let rX = Math.abs(translateX.value);
          if (rX > b && rX < a) {
            let value1 = - 65;
            if (value1 < translateY.value && opacity.value == 1) {
              // runner.current.pause()
              outAndStop()
            }
          }
        });
      }

    }, 100)
  }, [])


  const AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }, { rotateY: "180deg" }]
    }
  })

  const AnimatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }, { rotateY: "180deg" }],
      opacity: opacity.value
    }
  })

  const tapScreen = () => {
    runner.current.pause()
    translateY.value = withSpring(-200, { duration: 5000 })

    if(boardHeight.value !== 50){
      replay()
    }
  }

  const replay =() => {
    stopwatchTimerRef.current?.reset();
    runner.current.play();
    bgRef.current.play();
    stopwatchTimerRef.current?.play();
    boardColor.value = withTiming("#fff", { duration: 1000 });
    boardHeight.value = withSpring(60, { duration: 2000 });
    boardTranslateY.value = withSpring(0,{duration:2000});
    textOpacity.value = withTiming(0,{duration:1000})
  }

  const releaseTap = () => {
    runner.current.play()
    translateY.value = withTiming(0, { duration: 1000 })
  }

  const outAndStop = () => {
    runner.current.reset();
    bgRef.current.reset();
    stopwatchTimerRef.current?.pause();
    boardColor.value = withTiming("#986868	", { duration: 1000 });
    boardHeight.value = withSpring(200, { duration: 2000 });
    boardTranslateY.value = withSpring(height / 2,{duration:2000});
    textOpacity.value = withTiming(1,{duration:1000})
    translateY.value = withSpring(-height, { duration: 5000 })
  }

  const scoreBoard = useAnimatedStyle(() => {
    return {
      width: "60%",
      height: boardHeight.value,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: boardColor.value,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      transform: [{ translateY: boardTranslateY.value }],
    }
  });

  const outText = useAnimatedStyle(() => {
    return {
      fontSize: 16,
      fontFamily: medium,
      color: "#DC143C",
      marginVertical:"2%",
    }
  })

  const replyText = useAnimatedStyle(()=>{
    return{
      fontSize:10,
      fontFamily:medium,
      opacity: textOpacity.value
    }
  })


  return (
    <Pressable style={styles.container} onPressIn={tapScreen} onPressOut={releaseTap}>
      <View style={styles.header}>
        <Animated.View style={scoreBoard}>
          <Animated.Text style={outText}>Score</Animated.Text>
          <StopwatchTimer ref={stopwatchTimerRef} digitStyle={{ fontSize: 18, color: "#483248", fontFamily: medium }} />
          <Animated.Text style={replyText}>Tap and play</Animated.Text>
        </Animated.View>
      </View>
      <View style={styles.bg}>
        <LottieView
          source={require('../../assets/lottie/baground.json')}
          autoPlay={true}
          loop
          style={{ height: 400, width: width * 2 }}
          ref={bgRef}
        />
      </View>
      <View style={styles.path}>
        <View style={styles.road} />
        <Animated.View style={[{ zIndex: 10000, bottom: "5%" }, AnimatedStyle]} ref={runnerX}>
          <LottieView
            source={require('../../assets/lottie/skatting.json')}
            autoPlay={true}
            loop
            style={{ height: 100, width: 130 }}
            ref={runner}
          />
        </Animated.View>
        <Animated.View style={[{ zIndex: 10000, bottom: "20%", position: "absolute", right: 0 }, AnimatedStyle1]}>
          <LottieView
            source={require('../../assets/lottie/strick.json')}
            autoPlay={true}
            loop
            style={{ height: 60, width: 60 }}
            ref={enRef}
          />
        </Animated.View>
      </View>

    </Pressable>
  );
};

export default HomeScreen;