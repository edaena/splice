

//var $ = jQuery = require('../../libraries/jquery/dist/jquery');
//var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');
var React = require('react');
var HelloWorld = require('./Job.jsx');

React.render(
    <HelloWorld />,
    document.getElementById('job-post')
);