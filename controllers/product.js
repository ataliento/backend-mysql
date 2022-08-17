



const getProducts = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM producto ')
    return res.status(200).json(result);

};

const saveProduct = async (req, res) => {
    const { nombre, descripcion, precio } = req.body

    const result = await pool.query('INSERT INTO producto SET?', {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio
    })

    console.log(result);
    return res.status(200).json('Creating product');

};

const getProduct = async (req, res) => {
    const { id } = req.query

    const [result] = await pool.query('SELECT * FROM producto WHERE id = ?', [id]);

    return res.status(200).json(result[0])
}

const deleteProduct = async (req, res) => {
    const { id } = req.query

    const [result] = await pool.query('DELETE FROM producto WHERE id = ?', [id]);

    return res.status(204).json()
}

const updateProduct = async (req, res) => {
    const { id } = req.query
    try{const {data}= req

    const result = await pool.query('UPDATE producto SET ? WHERE id = ?', [req.body,id]);
    } catch(error){
        console.error(error.message)
    }
    return res.status(204).json()
}