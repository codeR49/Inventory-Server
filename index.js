'use strict';
const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const classRoutes = require('./routes/classRoutes');
const itemRoutes = require('./routes/itemRoutes');
const packRoutes = require('./routes/packRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const typeRoutes = require('./routes/typeRouter');
const vendorRoutes = require('./routes/vendorRoutes');
const itemDetailsRoutes = require('./routes/itemDetailsRoutes');
const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 8080;
require('./db/database')();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/class', classRoutes);
app.use('/item', itemRoutes);
app.use('/pack', packRoutes);
app.use('/purchase', purchaseRoutes);
app.use('/type', typeRoutes);
app.use('/vendor', vendorRoutes);
app.use('/itemdetails', itemDetailsRoutes);
app.use('/users', userRoutes);

app.listen(port, () => console.log(`server is listening on url http://localhost:${port}`));