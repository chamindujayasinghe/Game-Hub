import  { extendTheme,type ThemingConfig } from "@chakra-ui/react";

const config: ThemingConfig = {
    initialColorMode:'dark'
}

const theme = extendTheme({config});

export default theme;