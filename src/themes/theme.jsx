import {
    extendTheme,
    withDefaultColorScheme,
    theme as baseTheme
} from '@chakra-ui/react'


const theme = extendTheme(
    {

        // global theme
        styles: {
            global: () => ({
                body: {
                    bg: "#27262F",
                    textColor: "white",
                    fontFamily: "Roboto"
                },
            }),
        },

        colors: {
            brand: baseTheme.colors.blue,
        },
        components: {
            Alert: {
                defaultProps: {
                    colorScheme: 'blue',
                },
            },
        },
    },
    withDefaultColorScheme({ colorScheme: 'brand' })
)

export default theme;