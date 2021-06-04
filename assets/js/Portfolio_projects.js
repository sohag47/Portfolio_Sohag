$(document).ready(function(){

    $('#all').click(function(){
        $('.php_laravel_projects').show();
        $('.python_django_projects').show();
        $('.mern_stack_projects').show();
        $('.python_desktop_projects').show();
    })

    $('#python').click(function(){
        $('.python_django_projects').show();
        $('.php_laravel_projects').hide();
        $('.python_desktop_projects').hide();
        $('.mern_stack_projects').hide();
        
    })

    $('#php').click(function(){
        $('.php_laravel_projects').show();
        $('.python_django_projects').hide();
        $('.python_desktop_projects').hide();
        $('.mern_stack_projects').hide();
    })

    $('#python_desktop_app').click(function(){
        $('.python_django_projects').hide();
        $('.php_laravel_projects').hide();
        $('.python_desktop_projects').show();
        $('.mern_stack_projects').hide();
       
        
    })

    $('#mern_stack').click(function(){
        $('.python_django_projects').hide();
        $('.php_laravel_projects').hide();
        $('.python_desktop_projects').hide();
        $('.mern_stack_projects').show();
    })

})
