steal.plugins('jquery/controller','jquery/controller/subscribe',
			  'jquery/view/ejs',
			  'jquery/model/json_rest',
			  'jquery/model/store/gears',
			  'jquery/dom/form_params')
     .resources()
     .models('recipe')
     .controllers('recipe')
     .views()