export default function Navbar() {
    return (
        <div className="flex justify-between pt-4 pr-6 pb-4 pl-6">
            <div className="flex items-center gap-8">
                <h1>Mini E-commerce</h1>
                <h3>Shop</h3>
            </div>
            <div className="flex gap-4">
                <button>Cart</button>
                <button>Fav</button>
                <button>Theme</button>
            </div>
        </div>
    )
}
