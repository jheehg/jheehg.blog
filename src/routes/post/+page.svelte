<script>

</script>

<section class="post">
   <h1 class="title">{{ page.title }}</h1>
   {{ content }}
   <span class="meta"><time datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date: "%B %-d, %Y" }}</time> &middot; {% for tag in page.tags %}
     <a href="/tag/{{tag}}">{{tag}}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}</span>
     <div class="scrollUpIconDiv">
       <i id="scrollUpIcon" class="fa-solid fa-circle-arrow-up fa-xl"></i>
     <div>
 </section>

