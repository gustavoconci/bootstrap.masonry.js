# bootstrap4.masonry.js
masonry using Bootstrap 4 grid

[Example](http://conci.com.br/masonry/bootstrap4.html)

```
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="js/bootstrap4.masonry.min.js"></script>
```

## HTML
```
<div class="row masonry" data-target=".item" data-col-xs="12" data-col-sm="6" data-col-md="4" data-col-lg="4" data-col-xl="3">
  <div class="item">
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</div>
```
or
```
<div class="row masonry" data-target=".item" data-col-xs="12" data-col-sm="6" data-col-md="4" data-col-lg="4" data-col-xl="3">
  <div class="col">
    <div class="item">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</div>
```

# bootstrap3.masonry.js
masonry using Bootstrap 3 grid

[Example](http://conci.com.br/masonry/bootstrap3.html)

```
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="js/bootstrap3.masonry.min.js"></script>
```

## HTML
```
<div class="row masonry" data-target=".item" data-col-xs="12" data-col-sm="4" data-col-md="3">
  <div class="item">
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</div>
```
or
```
<div class="row masonry" data-target=".item" data-col-xs="12" data-col-sm="4" data-col-md="3">
  <div class="col-xs-12 col-sm-4 col-md-3">
    <div class="item">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</div>
```

## JS
```
$('.masonry').masonry();
```

Push method to add elements
```
var $masonry = $('.masonry').masonry();
$.get('...', function(data) {
  $masonry.push($(data));
});
```
