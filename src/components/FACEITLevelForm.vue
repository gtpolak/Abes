<template>
    <div class="container">
        <b-field position="is-centered">
            <b-radio-button v-model="soloDuoType" native-value="solo" size="is-medium" @input="calculateCost">
                <b-icon icon="account"></b-icon> 
                Solo
            </b-radio-button>
            <b-radio-button v-model="soloDuoType" native-value="duo" size="is-medium" @input="calculateCost">
                <b-icon icon="account-multiple"></b-icon>     
                Duo
            </b-radio-button>
        </b-field>

        <b-field :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'">
            <b-select @input="onStartLevelChange">
                <option 
                    v-for="(level, index) in levels" 
                    :key="`index-${index}`"
                    :value="index"
                >
                    {{ level.name }}
                </option>
            </b-select>
        </b-field>
        <b-field :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'">
            <b-select @input="onTargetLevelChange">
                <option 
                    v-for="(level, index) in levels" 
                    :key="`index-${index}-1`"
                    :value="index"
                >
                    {{ level.name }}
                </option>
            </b-select>
        </b-field>

        <div>
            Total Cost: 
            <b-tag size="is-medium" type="is-primary">
                {{ totalCost }} 
                <b-icon icon="currency-eur" size="is-small" class="ml-1"></b-icon>
            </b-tag>  
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            targetLowerThanStartError: false,
            totalCost: 0,
            soloDuoType: '',
            startLevel: "",
            targetLevel: "",
            // Price to next level (1 -> 2, 3 -> 4 etc)
            levels: [
                { 
                    name: "Level 1",
                    price: {
                        solo: 12,
                        duo: 18
                    }
                },
                { 
                    name: "Level 2",
                    price: {
                        solo: 15,
                        duo: 19
                    }
                },
                { 
                    name: "Level 3",
                    price: {
                        solo: 16,
                        duo: 20
                    }
                },
                { 
                    name: "Level 4",
                    price: {
                        solo: 20,
                        duo: 25
                    }
                },
                { 
                    name: "Level 5",
                    price: {
                        solo: 25,
                        duo: 30
                    }
                },
                { 
                    name: "Level 6",
                    price: {
                        solo: 28,
                        duo: 32
                    }
                },
                { 
                    name: "Level 7",
                    price: {
                        solo: 35,
                        duo: 40
                    }
                },
                { 
                    name: "Level 8",
                    price: {
                        solo: 45,
                        duo: 50
                    }
                },
                { 
                    name: "Level 9",
                    price: {
                        solo: 55,
                        duo: 65
                    }
                },
                { 
                    name: "Level 10 (Elo 2001)",
                    price: {
                        solo: 120,
                        duo: 140
                    }
                },
                { 
                    name: "Level 10 (Elo 2001 - 2200)",
                    price: {
                        solo: 140,
                        duo: 165
                    }
                },
                { 
                    name: "Level 10 (Elo 2201 - 2400)",
                    price: {
                        solo: 250,
                        duo: 300
                    }
                },
                { 
                    name: "Level 10 (Elo 2401 - 2700)",
                    price: {
                        solo: 350,
                        duo: 300
                    }
                },
                { 
                    name: "Level 10 (Elo 2701 - 3000)",
                    price: {
                        solo: 12,
                        duo: 18
                    }
                }
            ]
        }
    },

    methods: {
        onStartLevelChange(value) {
            this.startLevel = value
            this.targetLowerThanStartError = this.startLevel >= this.targetLevel
        },

        onTargetLevelChange(value) {
            this.targetLevel = value
            this.targetLowerThanStartError = this.startLevel >= this.targetLevel
            this.calculateCost();
        },

        calculateCost() {
            if (this.startLevel >= this.targetLevel) {
                this.totalCost = 0
                return 
            }

            let price = 0

            for (let index = this.startLevel; index < this.targetLevel; index++) {
                price += this.levels[index].price[this.soloDuoType]
            }

            this.totalCost = price
        }
    }
}
</script>