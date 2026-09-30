
export default function TodoHeader({title, message} : {title: string, message: string}) {
    //const {dispatch,count} = useCounter();

    return (
            <>
                <h1 className="todo__title">{title}</h1>
                <p className="todo__subtitle">{message}</p>
            </>

  );
}
