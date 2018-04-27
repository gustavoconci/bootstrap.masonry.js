# bootstrap.masonry.js
masonry using Bootstrap 3 grid

[Example](http://htmlpreview.github.io/?https://github.com/gustavoconci/bootstrap.masonry.js/blob/master/index.html)

## Getting Started
```
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="js/bootstrap.masonry.js"></script>
```

## Usage
### HTML
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
### JS
```
$('.masonry').masonry();
```

[Example](http://htmlpreview.github.io/?https://github.com/gustavoconci/bootstrap.masonry.js/blob/master/index.html)
