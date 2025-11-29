const misProductos = [
    { id: "1", nombre: "Cilantro", precio: 15, categoria: ["hierba"], img: "https://freshleafuae.com/wp-content/uploads/2024/10/Coriander-leaves-loose-uae-freshleaf-dubai-uae-img01.jpg" },
    { id: "2", nombre: "Leche", precio: 35, categoria: ["lacteos", "bebidas"], img: "https://lacentraldeabastos.com/wp-content/uploads/2024/10/photoroom_023_20241014_154037-1.jpg.webp" },
    { id: "3", nombre: "Aceite", precio: 23, categoria: ["otros"], img: "https://www.mayoreototal.mx/cdn/shop/products/mayoreototal-caja-aceite-cristal-de-1-litro-en-12-botellas-aceites-grasas-y-derivados-aceites-aceites-grasas-y-derivados-sku_540x.jpg?v=1563806871" },
    { id: "4", nombre: "Chocolate", precio: 50, categoria: ["otros"], img: "https://lagranbodega.vteximg.com.br/arquivos/ids/285474-1000-1000/7506205807640.jpg?v=637786495833100000" },
    { id: "5", nombre: "Coca", precio: 20, categoria: ["bebidas"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/500px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item=> item.id === (id))
            resolve (producto)
        },2000)
    })
}