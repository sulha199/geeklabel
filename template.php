<?php

function geeklabel_preprocess_html(&$vars)
{
    global $user;
    $viewport = array(
        '#tag' => 'meta',
        '#attributes' => array(
            'name' => 'viewport',
            'content' => 'width=device-width, initial-scale=1, maximum-scale=1',
        ),
    );
    drupal_add_html_head($viewport, 'viewport');
    drupal_add_js(drupal_get_path('theme', 'geeklabel') . '/javascripts/h100vh.js');
    drupal_add_js(drupal_get_path('theme', 'geeklabel') . '/javascripts/ocSlider.js');
    drupal_add_js(drupal_get_path('theme', 'geeklabel') . '/javascripts/contact-form.js');
}

?>