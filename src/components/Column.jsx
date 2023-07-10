const Column = ({ title, children, type }) => {
    return (
        <>
            <div className={`container-column ${type}-Card`}>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </>
    );
};

export default Column;
