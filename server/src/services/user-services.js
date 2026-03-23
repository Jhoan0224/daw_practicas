import e from 'express';
import { mysq } from '../db.js';

const SERVER_ERROR = {message: 'Ocurrio un error en el Servidor.'}

export const getAllUsers = async (req, res) => {
    let pool = await mysq.getConnection();
    try {
        const [result] = await pool.execute('SELECT * FROM usuarios');

        res.json([result]);
    } 
    catch (err) {
        res.status(500).json(SERVER_ERROR);
    } finally {if (pool) pool.release();}
};

export const userBynombre = async (req, res) => {
    let pool = await mysq.getConnection();
    try {
        const nombre = req.params.nombre;
        const sqlQuery = `SELECT * FROM usuarios user WHERE user.nombre like concat('%', ?, '%')`;

        const [result] = await pool.execute(sqlQuery, [nombre]);
        
        return (result.length) ? res.status(200).json([result]) : res.status(404).json([result]);
    } 
    catch (err) {
        res.status(500).json(SERVER_ERROR);
    } finally {if (pool) pool.release();}
};

export const userByEmail = async (req, res) => {
    let pool = await mysq.getConnection();
    try {
        const email = req.params.email;
        const sqlQuery = `SELECT * FROM usuarios user WHERE user.email = ?`;

        const [result] = await pool.execute(sqlQuery, [email]);
        
        return (result.length) ? res.status(200).json([result]) : res.status(404).json([result]);
    } 
    catch (err) {
        res.status(500).json(SERVER_ERROR);
    } finally {if (pool) pool.release();}
};

export const createUser = async (req, res) => {
    let pool = await mysq.getConnection();
    try {
        const valuesAddUser = Object.values(req.body);
        const sqlQuery = `INSERT INTO usuarios(nombre, documento, carnet, email, contrasenia, bloqueado, activo) 
            values (?, ?, ?, ?, ?, ?, ?)`;

        const [result] = await pool.execute(sqlQuery, valuesAddUser);
        console.log([result.affectedRows]);
        
        return result.affectedRows > 0
        ? res.status(200).json(`El Usuario ha sido registrado con ID: ${result.insertId}.`)
        : res.status(200).json(`No ha sido posible registrar el Usuario.`);
    } 
    catch (err) {
        console.error(err);
        
        res.status(500).json(SERVER_ERROR);
    } finally {if (pool) pool.release();}
};

export const updateUser = async (req, res) => {
    let pool = await mysq.getConnection();
    try {
        const valuesAddUser = Object.values(req.body);
        const sqlQuery = `UPDATE usuarios 
            SET nombre = ? , documento = ? , carnet = ? , email = ? , contrasenia = ? , bloqueado = ? , activo = ?
            WHERE usuarios.id_usuario = ?
        `;

        const [result] = await pool.execute(sqlQuery, valuesAddUser);
        
        return result.changedRows > 0
        ? res.status(200).json(`Usuario con ID ${req.body.id_usuario} ha sido Actualizado.`)
        : res.status(200).json(`Usuario con ID ${req.body.id_usuario} No se puedo Actualizar.`);
    } 
    catch (err) {
        console.error(err);
        
        res.status(500).json(SERVER_ERROR);
    } finally {if (pool) pool.release();}
};

export const deleteUser = async (req, res) => {
    let pool = await mysq.getConnection();
    try {
        const idUser = req.params.id;
        console.log(idUser);
        
        const [result] = await pool.execute('DELETE FROM usuarios WHERE id_usuario = ?', [idUser]);
        
        return result.affectedRows > 0 ? res.status(200).json(`Usuario con ID ${idUser} ha sido Eliminado`) : res.status(404).json(`Usuario con ID ${idUser} No ha sido encontrado`);
    } 
    catch (err) {
        res.status(500).json(SERVER_ERROR);
    } finally {if (pool) pool.release();}
};