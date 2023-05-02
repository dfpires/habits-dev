import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export function HabitDay(){
	return (
        <Popover.Root>
            <Popover.Trigger className={"w-10 h-10 border-2 rounded-lg bg-yellow-900 border-zinc-800"}/>
            <Popover.Portal>
                <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
                    <span className="font-semibold text-zinc-400">terça-feira</span>
                    <span className="mt-1 font-extrabold leading-tight text-3xl">04/04 </span>
                    <ProgressBar progress={75} />
                    <div className="mt-6 flex flex-col gap-3">
                        <Checkbox.Root className="flex items-center gap-3 group">
                            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                                <Checkbox.Indicator>
                                    <Check size={20} className="text-white"/>
                                </Checkbox.Indicator>
                            </div>
                            <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                                Beber 2L de água
                            </span>
                        </Checkbox.Root>
                    </div>
                    <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}
