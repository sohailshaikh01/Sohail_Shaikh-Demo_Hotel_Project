const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db')
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'), (err) => {
        res.status(500).send(err);
    })
});

app.post('/login', (req, res) => {
    db.getConnection((err, connection) => {
        console.log("request received");
        if(err)
            console.error(err);
        else {
            const {username, password} = req.body;
            const sqlQuery1 = 'select user_id, username from users where username = ?';
            const sqlQuery2 = 'select password from users where username = ? AND password = ?';

            db.query(sqlQuery1, [username], (err1, result1) => {
                if(err1) {
                    console.error(err1);
                    res.sendStatus(500);
                }
                else {
                    if(result1.length === 0)
                        res.sendStatus(404);
                    else {
                        db.query(sqlQuery2, [username, password], (err2, result2) => {
                            if(err2) {
                                console.error(err2);
                                res.sendStatus(500);
                            }
                            else {
                                if(result2.length === 0)
                                    res.sendStatus(400);
                                else
                                    res.json({userId: result1[0].user_id });
                            }
                        });
                    }
                }
            });
        }
        connection.release();
    });
});

app.post('/sign-up-checkDuplicates', (req, res) => {
    db.getConnection((err, connection) => {
        if(err)
            console.error(err);
        else {
            const {fieldName, fieldValue} = req.body;
            const sqlQuery = 'select ?? from users where ?? = ?';

            db.query(sqlQuery, [fieldName, fieldName, fieldValue], (err, result) => {
                if(err) {
                    console.error(err);
                    res.sendStatus(500);
                }
                else {
                    if(result.length === 1)
                        res.sendStatus(409);
                    else
                        res.sendStatus(200);
                }
            });
        }
        connection.release();
    });
});

app.post('/sign-up', (req, res) => {
    db.getConnection((err, connection) => {
        if(err)
            console.error(err);
        else {
            const {username, password, name, phone, address} = req.body;
            const sqlQuery = 'insert into users(username, password, name, phone, address) values (?,?,?,?,?)';

            db.query(sqlQuery, [username, password, name, phone, address], (err) => {
                if(err) {
                    console.error(err);
                    res.sendStatus(500);
                }
                else
                    res.sendStatus(201);
            });
        }
        connection.release();
    });
});

app.post('/profile', (req, res) => {
    db.getConnection((err, connection) => {
        if(err)
            console.error(err);
        else {
            data = req.body;
            const userId = data[0];

            if(data.length === 1) {
                const sqlQuery1 = 'select name, address from users where user_id = ?';

                db.query(sqlQuery1, [userId], (err, result) => {
                    if(err) {
                        console.error(err);
                        res.sendStatus(500);
                    }
                    else
                        res.json({result });
                });
            }
            else {
                const name = data[1].name;
                const address = data[1].address;
                const sqlQuery2 = 'update users SET name = ?, address = ? where user_id = ?';

                db.query(sqlQuery2, [name, address, userId], (err) => {
                    if(err) {
                        console.error(err);
                        res.sendStatus(500);
                    }
                    else
                        res.sendStatus(200);
                });
            }
        }
        connection.release();
    });
});

app.post('/password-update', (req, res) => {
    db.getConnection((err, connection) => {
        if(err)
            console.error(err);
        else {
            const data = req.body;
            const userId = data[0];
            const currentPassword = data[1].currentPassword;
            const newPassword = data[1].newPassword;
            const sqlQuery1 = 'select password from users where user_id = ?'
            const sqlQuery2 = 'update users SET password = ? where user_id = ?';

            db.query(sqlQuery1, [userId], (err, result) => {
                if(err) {
                    console.error(err);
                    res.sendStatus(500);
                }
                else {
                    if(result[0].password === currentPassword) {
                        db.query(sqlQuery2, [newPassword, userId], (err) => {
                            if(err) {
                                console.error(err);
                                res.sendStatus(500);
                            }
                            else
                                res.sendStatus(200);
                        });
                    }
                    else {
                        res.sendStatus(400);
                    }
                }
            });
        }
        connection.release();
    });
});

app.post('/cart', (req, res) => {
    db.getConnection((err, connection) => {
        if(err)
            console.error(err);
        else {
            const cart = req.body;
            const userId = cart[0];
            const sqlQuery1 = 'delete from cart where user_id = ?';
            const sqlQuery2 = 'insert into cart values (?,?,?,?)';

            if(cart[1].length === 0) {
                db.query(sqlQuery1, [userId], (err) => {
                    if(err) {
                        console.error(err);
                        res.sendStatus(500);
                    }
                    else
                        res.sendStatus(200);
                });
            }
            else {
                db.query(sqlQuery1, [userId], (err) => {
                    if(err) {
                        console.error(err);
                        res.sendStatus(500);
                    }
                    else {
                        cart[1].map((data1) => {
                            const menuItem = Object.keys(data1);
                            data1 = Object.values(data1);
                            const quantity = data1[0];
                            const totalPrice = data1[1];

                            db.query(sqlQuery2, [userId, menuItem[0], quantity, totalPrice], (err) => {
                                if(err) {
                                    console.error(err);
                                    res.sendStatus(500);
                                    return;
                                }
                            });
                        });
                        res.sendStatus(200);
                    }
                });
            }
        }
        connection.release();
    });
});

app.post('/cart-data', (req, res) => {
    db.getConnection((err, connection) => {
        if(err)
            console.error(err);
        else {
            data = req.body;
            userId = data[0];
            reqMsg = data[1];
            const sqlQuery1 = 'delete from cart where user_id = ?';

            if(reqMsg === 'eraseCart') {
                db.query(sqlQuery1, [userId], (err) => {
                    if(err) {
                        console.error(err);
                        res.sendStatus(500);
                    }
                    else
                        res.sendStatus(200);
                });
            }
            else {
                const sqlQuery2 = 'select * from cart where user_id = ?';

                db.query(sqlQuery2, [userId], (err, result) => {
                    if(err) {
                        console.error(err);
                        res.sendStatus(500);
                    }
                    else {
                        if(result.length >= 1) 
                            res.json({result });
                        else 
                            res.sendStatus(204);
                    }
                });
            }
        }
        connection.release();
    });
});

app.post('/order', (req, res) => {
    db.getConnection((err, connection) => {
        if(err)
            console.error(err);
        else {
            const cartData = req.body;
            const sqlQuery1 = 'select * from orders where user_id = ?';

            if(cartData[1] === 'checkPreviousOrder') {
                const userId = cartData[0];
                db.query(sqlQuery1, [userId], (err, result) => {
                    if(err) {
                        console.error(err);
                        res.sendStatus(500);
                    }
                    else {
                        if(result.length === 0)
                            res.sendStatus(204);
                        else
                            res.sendStatus(200);
                    }
                });
            }
            else {
                const sqlQuery2 = 'select order_id from orders ORDER BY order_id DESC LIMIT 1';
                const sqlQuery3 = 'insert into orders values (?,?,?,?,?)';

                db.query(sqlQuery2, (err, result) => {
                    if(err) {
                        console.error(err);
                        res.sendStatus(500);
                    }
                    else {
                        if(result.length > 0) {
                            var [lastOrderID] = (result[0].order_id).match(/\d+/);
                            lastOrderID = parseInt(lastOrderID);
                            lastOrderID = lastOrderID + 1;
                            lastOrderID = '#' + lastOrderID.toString();

                            cartData.map((data) => {
                                cartRecords = Object.values(data);
                                const userId = cartRecords[0];
                                const menuItem = cartRecords[1];
                                const quantity = cartRecords[2];
                                const totalPrice = cartRecords[3];

                                db.query(sqlQuery3, [userId, lastOrderID, menuItem, quantity, totalPrice], (err) => {
                                    if(err) {
                                        console.error(err);
                                        res.sendStatus(500);
                                        return;
                                    }
                                });
                            });
                            res.sendStatus(200);
                        }
                        else {
                            lastOrderID = '#1';

                            cartData.map((data) => {
                                cartRecords = Object.values(data);
                                const userId = cartRecords[0];
                                const menuItem = cartRecords[1];
                                const quantity = cartRecords[2];
                                const totalPrice = cartRecords[3];

                                db.query(sqlQuery3, [userId, lastOrderID, menuItem, quantity, totalPrice], (err) => {
                                    if(err) {
                                        console.error(err);
                                        res.sendStatus(500);
                                        return;
                                    }
                                });
                            });
                            res.sendStatus(200);
                        }
                    }
                });
            }
        }
        connection.release();
    });
});

app.post('/ordered-data', (req, res) => {
    db.getConnection((err, connection) => {
        if(err)
            console.error(err);
        else {
            const orderedData = req.body;
            const userId = orderedData[0];
            const sqlQuery = 'select * from orders where user_id = ?';

            db.query(sqlQuery, [userId], (err, result) => {
                if(err) {
                    console.error(err);
                    res.sendStatus(500);
                }
                else {
                    if(result.length === 0)
                        res.sendStatus(204);
                    else
                        res.json({result });
                }
            });
        }
        connection.release();
    });
});

app.post('/feedback', (req, res) => {
    db.getConnection((err, connection) => {
        if(err)
            console.error(err);
        else {
            const userId = req.body[0];
            const feedback = req.body[1].feedback;
            const sqlQuery = 'insert into feedbacks values(?,?)';

            db.query(sqlQuery, [userId, feedback], (err) => {
                if(err) {
                    console.error(err);
                    res.sendStatus(500);
                }
                else
                    res.sendStatus(200);
            });
        }
        connection.release();
    });
});

app.listen(port, () => {
    console.log('server is running');
});