interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps){
    return (
    <div className="
        bg-zinc-900 
        w-20 
        h-10 
        text-white 
        rounded 
        m-2 
        flex 
        items-center 
        justify-center"> 
        Teste {props.completed} 
    </div>
    )
}
