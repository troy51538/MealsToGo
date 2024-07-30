import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { LiteCreditCardInput } from "react-native-credit-card-input";

export const CheckoutScreen = () => {
  const onChange = () => {};
  return <LiteCreditCardInput onChange={onChange} />;
};
