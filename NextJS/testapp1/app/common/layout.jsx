



export default function CommonLayout({ children }) {
    return (
        <div>
            <header>Common Header</header>
            <main>{children}</main>
            <footer>Common Footer</footer>
        </div>
    );
}

