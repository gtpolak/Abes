<template>
    <footer class="section pb-0 has-background-grey-darker">
        <div class="columns">
            <div class="column is-4 has-text-white has-text-left">
                <div class="block">
                    <h2 class="title is-3 has-text-primary">
                        Pixel Boost
                    </h2>
                </div>
                <div></div>
            </div>
            <div class="column is-2 has-text-left has-text-white">
                <div class="block">
                    <h3 class="title is-4 has-text-primary">Boosters</h3> 
                </div>
                <div class="pl-1 has-text-left">
                    <ul style="list-style-type: none">
                        <li><router-link class="has-text-white" :to="{name: 'FaceIt'}">FACEIT</router-link> </li>
                        <li><router-link class="has-text-white" :to="{name: 'Rank'}">RANK</router-link> </li>
                        <li><router-link class="has-text-white" :to="{name: 'Esportal'}">ESPORTAL</router-link> </li>
                        <li><router-link class="has-text-white" :to="{name: 'ESEA'}">ESEA</router-link> </li>
                    </ul>
                </div>
            </div>
            <div class="column is-2 has-text-left has-text-white">
                <div class="block">
                    <h3 class="title is-4 has-text-primary">Social</h3> 
                </div>
                <div class="pl-1 has-text-left">
                    <ul style="list-style-type: none">
                        <li>Steam</li>
                        <li>Discord</li>
                    </ul>
                </div>
            </div>
            <div class="column is-2 has-text-left has-text-white">
                <div class="block">
                    <h3 class="title is-4 has-text-primary">Contact</h3> 
                </div>
                <div class="pl-1">
                    pixelboost@pixelboost.com
                </div>
            </div>
        </div>
        <div class="columns">
            
        </div>
        <hr>
        <div class="columns has-text-white">
            <div class="column is-12">
                &copy; 2022 Pixel Boost 
            </div>
        </div>
    </footer>
</template>