import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example(props: any) {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{ alignSelf: '' }}>{props.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='div'>
                        <span className='span'><img src="./image.jpg" /></span>
                        <span className='span-right'> text text text</span>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}