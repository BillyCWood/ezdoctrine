import { DM_Sans, DM_Serif_Display, DM_Serif_Text } from "next/font/google";


export const dm_sans_init = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dm_sans',
    weight: ['100', '200', '300', '400', '100', '700', '800', '900'],
});
  
export const dm_serif_display_init = DM_Serif_Display({
    subsets: ['latin'],
    variable: '--font-dm_display',
    weight: ['400'],
});
  
export const dm_serif_text_init = DM_Serif_Text({
    subsets: ['latin'],
    variable: '--font-dm_text',
    weight: ['400'],
});


export const dm_sans = dm_sans_init.variable;
export const dm_serif_display = dm_serif_display_init.variable;
export const dm_serif_text = dm_serif_text_init.variable;