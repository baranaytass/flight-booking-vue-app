<script setup>
import SearchPanelCard from '@/components/SearchPanelCard.vue';
import ResultPanel from '@/components/ResultPanel.vue';
</script>

<template>
    <div>
        <div class="search-panel">
            <SearchPanelCard />
        </div>

        <div class="result-panel align-content">
            <ResultPanel />
        </div>

    </div>
</template>

<style>
.search-panel {
    background-color: rgb(174 211 155 / 34%);
    box-shadow: #a7c59369 0px 2px 8px 2px;
}
.result-panel {
    min-height: 480px;
    padding: 24px 24% 0 24%;
}
</style>

  