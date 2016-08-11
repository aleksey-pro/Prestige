(function( $ ) {

	function classUpdate($el, className, enabled) {
		if (enabled) {
			$el.addClass(className);
		} else {
			$el.removeClass(className);
		}
	}	
	var defaults = {
		checkboxWrapClass : 'ce-checkbox',
		radioWrapClass : 'ce-radio',
		radioCheckboxCheckedClass : 'ce-checked',
		fileWrapClass : 'ce-upload',
		fileUploadText : 'Прикрепить файл',
		selectClass : '',
		selectAutoWidth: true,
		selectItemsNumber : false,
		callback : function() { }
    };

    var methods = {
    	init: function(params) {
        	var options = $.extend({}, defaults, params); 
			var $items = $(this);
			$items.each(function(index){
				match($(this), options);
			});
			options.callback.call();
			return $items;
    	},
    	disable: function(){
    		var $items = $(this);
    		$items.each(function(index){
    			$(this).attr('disabled','disabled');
				if( $(this).is(":checkbox") || $(this).is(":radio") ) {
					$(this).parent().addClass('disabled');
				}
				if( $(this).is(":file") ) {
					$(this).parents('div:first').addClass('disabled');
				}
				if( $(this).is("select") ) {
					$(this).next('.ceSelect').addClass('disabled');
				}
			});
    	},
    	enable: function(){
    		var $items = $(this);
    		$items.each(function(index){
    			$(this).removeAttr('disabled');
				if( $(this).is(":checkbox") || $(this).is(":radio") ) {
					$(this).parent().removeClass('disabled');
				}
				if( $(this).is(":file") ) {
					$(this).parents('div:first').removeClass('disabled');
				}
				if( $(this).is("select") ) {
					$(this).next('.ceSelect').removeClass('disabled');
				}
			});
    	}

	};

	//  check which item and call the appropriate function
	function match($element, options) {
		if($element.is(":checkbox")) {
			build_checkbox($element, options);
		}
		if($element.is(":radio")) {
			build_radio($element, options);
		}
		if($element.is(":file")) {
			build_file($element, options);
		}
		if($element.is("select")) {
			build_select($element, options);
		}
		return;
	};

	// Build checkbox
	function build_checkbox($element, options) {
		// Style element
		$element.wrap( $('<span />' , {
            'class': options.checkboxWrapClass
		}) );
		// If checked add class
		if( $element.is(":checked") ) {
			classUpdate($element.parent(), options.radioCheckboxCheckedClass, true);
		};
		// Change Event
		$element.on("change", function(){
			classUpdate( $(this).parent(), options.radioCheckboxCheckedClass, $(this).is(":checked"));
		});
		$element.focus(function(){
			$(this).parent().addClass('focus');
		});
		$element.blur(function(){
			$(this).parent().removeClass('focus');
		});
	};

	// Build radio
	function build_radio($element, options) {
		// Style element
		$element.wrap( $('<span />' , {
            'class': options.radioWrapClass
		}) );
		// If checked add class
		if( $element.is(":checked") ) {
			classUpdate($element.parent(), options.radioCheckboxCheckedClass, true);
		};
		// Change Event (Find all radio with same name and call function "classUpdate")
		$element.on("change",  function(){
			$(':radio[name="' + $(this).prop('name') + '"]').each(function(){
				classUpdate($(this).parent(), options.radioCheckboxCheckedClass, $(this).is(":checked"));
			});
		});
		$element.focus(function(){
			$(this).parent().addClass('focus');
		});
		$element.blur(function(){
			$(this).parent().removeClass('focus');
		});
	};

	// Build <input type="file">
	function build_file($element, options) {
		// Style element
		$element.wrap( $('<div />' , {
            'class': options.fileWrapClass
		}).append($('<span />',{
            'class': 'upl-filebutton',
			'text': options.fileUploadText
		})).append($('<span />',{
            'class': 'upl-filename'
		})) );
		// Change Event
		$element.on("change",  function(){
			if($(this).val().indexOf('C:\\fakepath\\')+1)
				$(this).closest('.ce-upload').find('.upl-filename').text( $(this).val().substr(12) );
		});
		$element.on({
		  mouseenter: function(){
		    $(this).closest('.upl-filebutton').addClass('hover');
		  },
		  mouseleave: function(){
		    $(this).closest('.upl-filebutton').removeClass("hover active");
		  },
		  mousedown: function(){
		    $(this).closest('.upl-filebutton').addClass("active");
		  },
		  mouseup: function(){
		    $(this).closest('.upl-filebutton').removeClass("active");
		  }
		});
	};
	
	// Build selects
	function build_select($element, options) {
		var selWrapperClass = 'ceSelect '+ options.selectClass;
		
		// Complement wrapper class
		if($element.prop('multiple')) {
			selWrapperClass += ' multi';
		} else {
			selWrapperClass += ' closed';
		}
		if($element.is(':disabled')) {
			selWrapperClass += ' disabled';
		}
		// HTML structure
		if($element.prop('multiple')) {
			var selWrapper = $('<div />', {
								'class': selWrapperClass
							}).append(
								$('<div />', {
                                    'class': 'ceSelect-options'
								})
							);
		} else {
			var selWrapper = $('<div />', {
                                    'class': selWrapperClass
							}).append(
								$('<div />', {
                                    'class': 'ceSelect-selected',
									text: $element.find("option:selected").text()
								}),
								$('<div />', {
                                    'class': 'ceSelect-options'
								})
							);
		}
		// check option elements and add in oure structure
		$element.children().each(function(index){
			var thisIndex = index,
				selectedClass = '';
			if( $(this).is('optgroup') ){
				$('.ceSelect-options',selWrapper).append(
					$('<span />', {
                        'class' : 'ceSelect-group'
					}).append(
						$('<span />',{
                            'class' : 'ceSelect-group-label',
							text: $(this).attr('label')
						})
					)
				);
				$(this).find('option').each(function(index){
					if( $(this).is(':selected') ) {
						selectedClass = ' selected'
					}
					$('.ceSelect-group',selWrapper).eq(thisIndex).append(
						$('<span />',{
                            'class': 'ceSelect-item' + selectedClass,
							'text': $(this).text(),
							'data-value': $(this).val()
						})
					);
					selectedClass = '';
				});
			} else {
				if($(this).is(':selected')) {
					selectedClass = ' selected'
				}
				$('.ceSelect-options',selWrapper).append(
						$('<span />',{
                            'class': 'ceSelect-item' + selectedClass,
							'text': $(this).text(),
							'data-value': $(this).val()
						})
					);
			}
		});
		//  apply to element
		$element.addClass('ceCustom').after(selWrapper);

		var $ceSelect = $element.next('.ceSelect');
		if( options.selectItemsNumber ) {
			$ceSelect.find('.ceSelect-item').each(function(index){
				index++;
				$(this).addClass('item' + index);
			});
			$ceSelect.find('.ceSelect-group').each(function(index){
				index++;
				$(this).addClass('group' + index);
			});
		}
		if( options.selectAutoWidth ) {
			$ceSelect.css({
				'width' : $element.innerWidth()+2
			});
		}

		$element.focus(function(){
			$ceSelect.trigger("click").addClass('focus');
		});
		$element.blur(function(){
			$ceSelect.trigger("click").removeClass('focus');
		});
		// click events
		$ceSelect.on("click",  function(){
			if( !$ceSelect.hasClass('disabled') ) $ceSelect.toggleClass('closed open');
		});
		$ceSelect.on("click", ".ceSelect-item", function(){
			if( !$ceSelect.hasClass('disabled') ){
				if( !$ceSelect.hasClass('multi') ){
					$ceSelect.find('.ceSelect-item').removeClass('selected');
					$(this).addClass('selected');
					$ceSelect.find('.ceSelect-selected').text( $(this).text() );
					$element.val( $(this).attr('data-value') );
					$element.trigger("change");
				}
				else {
					var selectedOpt = new Array;
					$(this).toggleClass('selected');
					$ceSelect.find('.ceSelect-item').each(function(index){
						if( $(this).hasClass('selected') ) {
							selectedOpt.push( $(this).attr('data-value') );
						}
					});
					$element.val( selectedOpt );
					$element.trigger("change");
				}
			}
		});
	}

  $.fn.customElements = function(method) {
    if ( methods[method] ) {
        return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
        return methods.init.apply( this, arguments );
    } else {
        $.error( 'Метод "' +  method + '" не найден в плагине jQuery.mySimplePlugin' );
    }
  };
})(jQuery);
