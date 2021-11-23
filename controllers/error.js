import path from 'path'

export const get404Page = (req, res, next) =>{
    res.status(404).sendFile(path.join(path.resolve(),'views','404.html'))
}