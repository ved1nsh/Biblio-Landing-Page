const fs = require('fs');
const files = [
    'app/sections/PageFourSection.tsx',
    'app/sections/PageFiveSection.tsx',
    'app/sections/PageSixSection.tsx',
    'app/sections/PageSevenSection.tsx'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Remove old imageWrapperClass and textClass and imageClass from JSON arrays to clean them up
    // Actually, it's safer to just replace the rendering logic inside the .map() 

    // Replace <article> class to be responsive height instead of h-full
    // Wait, the user said: "the card shouldnt be this long but it should not be very small too.. then i need the text to be in proportion with the card.. the space between the image and the text shiuld be less and text should be bigger"

    // Let's change the card height from `h-[82%]` or `h-full` to `h-[65vh] md:h-[75vh] lg:h-[80vh]`

    content = content.replace(/className=\{\`relative flex h-full w-full shrink-0 flex-col overflow-hidden rounded-\[28px\] bg-\[#F7F7F9\] md:w-\[31%\] \$\{card\.containerClass\}\`\}/g, 
        \`className={\\\`relative flex h-[70vh] md:h-[75vh] lg:h-[80vh] w-[90vw] md:w-[31%] shrink-0 flex-col overflow-hidden rounded-[28px] bg-[#F7F7F9] \\\${card.containerClass}\\\`}\`);

    // Wait, some might have h-[82%] if undone. Let's cover both.
    content = content.replace(/className=\{\`relative flex h-\[82%\] md:h-full w-full shrink-0 flex-col overflow-hidden rounded-\[28px\] bg-\[#F7F7F9\] md:w-\[31%\] \$\{card\.containerClass\}\`\}/g, 
        \`className={\\\`relative flex h-[70vh] md:h-[75vh] lg:h-[80vh] w-[90vw] md:w-[31%] shrink-0 flex-col overflow-hidden rounded-[28px] bg-[#F7F7F9] \\\${card.containerClass}\\\`}\`);

    // Replace imageCaption block
    content = content.replace(
        /\{card\.kind === "imageCaption" && \(\s*<>\s*<div className=\{card\.imageWrapperClass\}>\s*<Image\s*src=\{card\.image\}\s*alt="[^"]*"\s*fill\s*className=\{card\.imageClass\}\s*\/>\s*<\/div>\s*<p className=\{card\.textClass\}>\s*\{card\.caption\}\s*<\/p>\s*<\/>\s*\)}/g,
        `{card.kind === "imageCaption" && (
                                    <div className="flex h-full flex-col justify-between p-6 md:p-8">
                                        <div className="relative flex-1 w-full min-h-0">
                                            <Image
                                                src={card.image}
                                                alt="Feature preview"
                                                fill
                                                className="object-contain object-top"
                                            />
                                        </div>
                                        <p className="mt-5 shrink-0 text-center text-[15px] font-medium leading-[1.4] text-zinc-700 md:mt-6 md:text-[17px]">
                                            {card.caption}
                                        </p>
                                    </div>
                                )}`
    );

    // Replace topTextImage block
    content = content.replace(
        /\{card\.kind === "topTextImage" && \(\s*<>\s*<p className=\{card\.textClass\}>\s*\{card\.topText\}\s*<\/p>\s*<div className=\{card\.imageWrapperClass\}>\s*<Image\s*src=\{card\.image\}\s*alt="[^"]*"\s*fill\s*className=\{card\.imageClass\}\s*\/>\s*<\/div>\s*<\/>\s*\)}/g,
        `{card.kind === "topTextImage" && (
                                    <div className="flex h-full flex-col justify-between px-6 pt-6 md:px-8 md:pt-8 pb-0">
                                        <p className="mb-5 shrink-0 text-center text-[15px] font-medium leading-[1.4] text-zinc-900 md:mb-6 md:text-[17px]">
                                            {card.topText}
                                        </p>
                                        <div className="relative flex-1 w-full min-h-0">
                                            <Image
                                                src={card.image}
                                                alt="Feature preview"
                                                fill
                                                className="object-contain object-bottom"
                                            />
                                        </div>
                                    </div>
                                )}`
    );

    // Replace imageOnly block
    content = content.replace(
        /\{card\.kind === "imageOnly" && \(\s*<div className=\{card\.imageWrapperClass\}>\s*<Image\s*src=\{card\.image\}\s*alt="[^"]*"\s*fill\s*className=\{card\.imageClass\}\s*\/>\s*<\/div>\s*\)}/g,
        `{card.kind === "imageOnly" && (
                                    <div className="relative flex h-full w-full flex-col px-6 pt-6 md:px-8 md:pt-8 pb-0">
                                        <div className="relative flex-1 w-full min-h-0">
                                            <Image
                                                src={card.image}
                                                alt="Feature preview"
                                                fill
                                                className="object-contain object-bottom"
                                            />
                                        </div>
                                    </div>
                                )}`
    );

    fs.writeFileSync(file, content);
});
