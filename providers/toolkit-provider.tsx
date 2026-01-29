"use client";
// redux
import { Provider } from "react-redux";
import { store, persistor } from "@/toolkit/store";
import { PersistGate } from "redux-persist/integration/react";

export const ToolkitProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {() => <>{children}</>}
      </PersistGate>
    </Provider>
  );
};
