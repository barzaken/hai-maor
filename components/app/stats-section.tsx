'use client';

import { NumberTicker } from '../ui/number-ticker';
import { PlusIcon } from 'lucide-react';

export function StatsSection() {
    return (
        <section className='flex-1 min-w-full flex justify-center items-center gap-6 sm:gap-12 md:gap-[50px]'>
            <div className="flex flex-col gap-2 items-center">
                <div className="flex  gap-2 items-end">
                    <NumberTicker
                        value={20}
                        // decimalPlaces={2}
                        className="text-3xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
                    />
                    <p className="text-sm mb-0.5 font-medium text-muted-foreground">שנים</p>
                </div>
                <p className="text-sm font-medium text-muted-foreground">מול במה, מצלמה וקהל</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <div className="flex items-center gap-2">
                    <PlusIcon className="size-4" />

                    <NumberTicker
                        value={1046}
                        className="text-3xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
                    />
                </div>
                <p className="text-sm font-medium text-muted-foreground">הצגות</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <div className="flex items-center gap-2">
                    <PlusIcon className="size-4" />
                    <NumberTicker
                        value={102800}
                        startValue={99980}
                        className="text-3xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
                    />
                </div>

                <p className="text-sm font-medium text-muted-foreground">אנשים שצפו בי</p>
            </div>
        </section>
    );
}