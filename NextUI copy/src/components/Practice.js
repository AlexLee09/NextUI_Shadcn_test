import React from "react";
import { Button } from "@nextui-org/button";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

function Practice(){

    const mantra = "Strong, Smart, Cute, Kind, Caring, and Courageous"
    return(
        <div className="flex justify-center items-center h-screen">
            <Button 
                color="primary" 
                variant="outline"
                className="border-3 border-opacity-70 border-secondary"
            >
                Click Me
            </Button>
            <Accordion>
                <AccordionItem key = "1">
                    {mantra}
                </AccordionItem>     
                <AccordionItem>
                    {mantra}
                </AccordionItem>
                <AccordionItem>
                    {mantra}
                </AccordionItem>
                <AccordionItem>
                    {mantra}
                </AccordionItem>

            </Accordion>
        </div>
    )
}

export default Practice