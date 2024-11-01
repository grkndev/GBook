// hooks/useMarkdownStyles.ts
import { StyleSheet } from 'react-native';
import { Platform } from "react-native";
import { useColorScheme } from './useColorScheme';
import { NAV_THEME } from './constants';

export const useMarkdownStyles = () => {
  const { colorScheme } = useColorScheme();
  const theme = NAV_THEME[colorScheme];

  const getStyles = () => ({
    // Headings
    heading1: {
      color: theme.text,
      flexDirection: 'row' as const,
      fontSize: 32,
      marginBottom: 16,
      fontWeight: 'bold' as const,
    },
    heading2: {
      color: theme.text,
      flexDirection: 'row' as const,
      fontSize: 24,
      marginBottom: 14,
      fontWeight: 'bold' as const,
    },
    heading3: {
      color: theme.text,
      flexDirection: 'row' as const,
      fontSize: 18,
      marginBottom: 12,
      fontWeight: 'bold' as const,
    },
    heading4: {
      color: theme.text,
      flexDirection: 'row' as const,
      fontSize: 16,
      marginBottom: 10,
      fontWeight: 'bold' as const,
    },
    heading5: {
      color: theme.text,
      flexDirection: 'row' as const,
      fontSize: 13,
      marginBottom: 8,
      fontWeight: 'bold' as const,
    },
    heading6: {
      color: theme.text,
      flexDirection: 'row' as const,
      fontSize: 11,
      marginBottom: 6,
      fontWeight: 'bold' as const,
    },

    // Horizontal Rule
    hr: {
      backgroundColor: theme.border,
      height: 1,
      marginVertical: 16,
    },

    // Emphasis
    strong: {
      color: theme.text,
      fontWeight: 'bold' as const,
    },
    em: {
      color: theme.text,
      fontStyle: 'italic' as const,
    },
    s: {
      color: theme.text,
      textDecorationLine: 'line-through' as const,
    },

    // Blockquotes
    blockquote: {
      backgroundColor: colorScheme === 'dark' ? theme.card + '40' : theme.card,
      borderColor: theme.border,
      borderLeftWidth: 4,
      marginLeft: 5,
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginVertical: 8,
    },

    // Lists
    bullet_list: {
      color: theme.text,
    },
    ordered_list: {
      color: theme.text,
    },
    list_item: {
      color: theme.text,
      flexDirection: 'row' as const,
      justifyContent: 'flex-start',
      marginVertical: 4,
    },
    bullet_list_icon: {
      color: theme.text,
      marginLeft: 10,
      marginRight: 10,
    },
    bullet_list_content: {
      color: theme.text,
      flex: 1,
    },
    ordered_list_icon: {
      color: theme.text,
      marginLeft: 10,
      marginRight: 10,
    },
    ordered_list_content: {
      color: theme.text,
      flex: 1,
    },

    // Code
    code_inline: {
      color: theme.text,
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: colorScheme === 'dark' ? theme.card + '40' : theme.card,
      padding: 10,
      borderRadius: 4,
      ...Platform.select({
        ios: {
          fontFamily: 'Courier',
        },
        android: {
          fontFamily: 'monospace',
        },
      }),
    },
    code_block: {
      color: theme.text,
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: colorScheme === 'dark' ? theme.card + '40' : theme.card,
      padding: 16,
      borderRadius: 8,
      marginVertical: 8,
      ...Platform.select({
        ios: {
          fontFamily: 'Courier',
        },
        android: {
          fontFamily: 'monospace',
        },
      }),
    },
    fence: {
      color: theme.text,
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: colorScheme === 'dark' ? theme.card + '40' : theme.card,
      padding: 16,
      borderRadius: 8,
      marginVertical: 8,
      ...Platform.select({
        ios: {
          fontFamily: 'Courier',
        },
        android: {
          fontFamily: 'monospace',
        },
      }),
    },

    // Tables
    table: {
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 8,
      marginVertical: 8,
    },
    thead: {
      backgroundColor: colorScheme === 'dark' ? theme.card + '40' : theme.card,
    },
    tbody: {
      color: theme.text,
    },
    th: {
      color: theme.text,
      flex: 1,
      padding: 8,
      fontWeight: 'bold' as const,
    },
    tr: {
      borderBottomWidth: 1,
      borderColor: theme.border,
      flexDirection: 'row' as const,
    },
    td: {
      color: theme.text,
      flex: 1,
      padding: 8,
    },

    // Links
    link: {
      color: theme.primary,
      textDecorationLine: 'underline' as const,
    },
    blocklink: {
      flex: 1,
      borderColor: theme.border,
      borderBottomWidth: 1,
    },

    // Images
    image: {
      flex: 1,
      borderRadius: 8,
      marginVertical: 8,
    },

    // Text Output
    text: {
      color: theme.text,
    },
    textgroup: {
      color: theme.text,
    },
    paragraph: {
      color: theme.text,
      marginTop: 8,
      marginBottom: 8,
      flexWrap: 'wrap' as const,
      flexDirection: 'row' as const,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '100%',
    },
    hardbreak: {
      width: '100%',
      height: 1,
      backgroundColor: theme.border,
    },
    softbreak: {
      color: theme.text,
    },

    // Additional elements
    pre: {
      color: theme.text,
    },
    inline: {
      color: theme.text,
    },
    span: {
      color: theme.text,
    },
  });

  return StyleSheet.create(getStyles() as any);
};