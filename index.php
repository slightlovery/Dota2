<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name=”viewport” content=”width=device-width, initial-scale=1, maximum-scale=1″>
    <link rel="Shortcut Icon" href="./site.png">
    <link rel="stylesheet" href="./src/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./src/css/style.css" />
    <title>Dota2-仿官方网站</title>
  </head>
  <body>
    <div class="dota2_nav_container">
        <?php include './src/page/header.html'; ?>
    </div>
    <div class="banner">
        <?php include './src/page/banner.html'; ?>
    </div>
    <div class="u_wrapper">
        <div class="u_container">
            <?php include './src/page/btn_section.html'; ?>
            <?php include './src/page/news_section.html'; ?>
            <?php include './src/page/activity_section.html'; ?>
            <?php include './src/page/video_section.html'; ?>
        </div>
    </div>
    <div class="footer">
        <?php include './src/page/footer.html'; ?>
    </div>
    <div class="nav_right">
        <?php include './src/page/nav_right.html'; ?>
    </div>
    <script type="text/javascript" src="./src/js/jquery.js"></script>
    <script type="text/javascript" src="./src/js/global.js"></script>
    <script type="text/javascript" src="./src/js/bootstrap.min.js"></script>
  </body>
</html>