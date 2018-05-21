import express from 'express';
import Vue from 'vue';
import vueRouter from 'vue-router';

const router = express.Router();



router.get('/', (req, res, next) => {
  res.renderVue('/pages/TopPage.vue');
});

module.exports = router;
