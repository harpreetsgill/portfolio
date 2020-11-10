<?php
    $pageTitle = 'Harpreet Singh Gill';
    $pageDesc = 'Portfolio of a British Columbia Institute of Technology (BCIT) student of New Media Design & Web Development 2020.';
    include 'partials/header.php';
    include 'partials/navbar.php';
?>

<main>
    <div id="intro">
        <h1 class="intro-text">
            <span class="indent">I</span> <a class="blue-text" href="projects/web-development.html">develop</a> websites,<br>
            <a class="orange-text" href="projects/graphic-design.html">design</a> graphics,<br>
            <span class="indent">&amp;</span><br>
            <a class="green-text" href="projects/ux-ui.html">create</a> user experiences<br>

        </h1>

        <img id="scroll-icon" src="images/down.svg">
    </div>

    <div id="featured-projects">

        <a href="projects/web-development/aivei-project-tracker.html">
            <div class="proj-card">
                <div class="proj-card-image">
                    <img src="images/thumb-aivei-dev.JPG" alt="A form to add a new course and a list of courses.">
                </div>
                <div class="proj-card-title" style="background: #fff;">
                    <h3 style="color: #000">Project Tracking website</h3>
                    <p style="color: #666;">A website that allows to track and manage school projects.</p>
                </div>
            </div>
        </a>

        <a href="projects/web-development/noteapp.html">
            <div class="proj-card">
                <div class="proj-card-image">
                    <img src="images/thumb-noteapp.jpg" alt="A note taking digital card.">
                </div>
                <div class="proj-card-title" style="background: #efb7a6">
                    <h3 style="color: #000">Note Taking Web App</h3>
                    <p style="color: #666;">A note taking web app made using React.js.</p>
                </div>
            </div>
        </a>

        <a href="projects/web-development/stearman-point-brewery-website.html">
            <div class="proj-card">
                <div class="proj-card-image">
                    <img src="images/thumb-stearman-website.jpg" alt="A lighthouse placed as a background iamge in the header of a website.">
                </div>
                <div class="proj-card-title" style="background: #a1c3dc">
                    <h3 style="color: #F05A30">Stearman Point Brewery Website</h3>
                    <p style="color: #666;">Website for the Stearman Point Brewery.</p>
                </div>
            </div>
        </a>

        <a href="projects/graphic-design/animal-poaching-posters.html">
            <div class="proj-card">
                <div class="proj-card-image">
                    <img src="images/2.jpg" alt="Bleeding Antlers on a copy of text.">
                </div>
                <div class="proj-card-title" style="background: #000">
                    <h3 style="color: #fff">Animal Poaching Posters</h3>
                    <p>Poster series that celebrates the work of a deceased journalist.</p>
                </div>
            </div>
        </a>

    </div>
</main>

<?php include 'partials/footer.php'; ?>