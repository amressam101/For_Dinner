

var one = `
        <div class="card-item-lf col-lg-5 shadow-lg rounded-5">
                    <div class="inner rounded-5">
                        <div class="box-image  position-relative overflow-hidden">
                            <div class="imge-1 ">
                            </div>
                            <div class="layer-one position-absolute ">
                                <i class="fa-solid fa-star me-1"></i>
                                <span class="one me-1">
                                    4.5
                                </span>
                                <span class="two">(324 reviews)</span>
                            </div>
                            <div
                                class="layer-two bg-white d-flex justify-content-around align-items-center  position-absolute ">
                                <div class="Prep-Time text-center">
                                    <i class="fa-solid fa-clock text-oraing"></i>
                                    <p class="one">Prep Time</p>
                                    <p class="two">15 min</p>
                                </div>
                                <div class="Cook-Time text-center">
                                    <i class="fa-solid fa-fire-burner text-red"></i>
                                    <p class="one">Cook Time</p>
                                    <p class="two">15 min</p>
                                </div>
                                <div class="Servings text-center">
                                    <i class="fa-solid fa-users text-blue"></i>
                                    <p class="one">Servings</p>
                                    <p class="two">4 people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item-rh col-lg-7 shadow-lg bg-white">
                    <div class="inner">
                        <div class="head d-flex justify-content-between align-items-center">
                            <div class="box-left">
                                <div class="box-head d-flex justify-content-start align-items-center gap-3">
                                    <div class="box-one box-grean ">
                                        Easy
                                    </div>
                                    <div class="box-two box-blue ">
                                        Asian
                                    </div>
                                </div>
                                <h3>Chicken Stir-Fry</h3>
                                <p>
                                    Quick and healthy stir-fry with colorful vegetables
                                </p>
                            </div>
                            <div class="box-right d-flex justify-content-center align-items-center gap-2">
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                        <ul class="nav nav-tabs d-flex justify-content-around align-items-center" id="myTab"
                            role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab"
                                    data-bs-target="#ingredients-tab-pane" type="button" role="tab"
                                    aria-controls="ingredients-tab-pane" aria-selected="true"> <i
                                        class="fa-solid fa-list-check me-2"></i> Ingredients</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="instructions-tab" data-bs-toggle="tab"
                                    data-bs-target="#instructions-tab-pane" type="button" role="tab"
                                    aria-controls="instructions-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-book-open me-2"></i> Instructions</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nutrition-tab" data-bs-toggle="tab"
                                    data-bs-target="#nutrition-tab-pane" type="button" role="tab"
                                    aria-controls="nutrition-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-chart-pie me-2"></i>Nutrition</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Chef-tab" data-bs-toggle="tab"
                                    data-bs-target="#Chef-tab-pane" type="button" role="tab"
                                    aria-controls="Chef-tab-pane" aria-selected="false"><i
                                        class="fa-solid fa-lightbulb me-2"></i>Chef's Tips</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel"
                                aria-labelledby="ingredients-tab" tabindex="0">
                                <div class="nav-one">
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            1
                                        </div>
                                        <div class="content">
                                            500g chicken breast, sliced
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            2
                                        </div>
                                        <div class="content">
                                            2 bell peppers, sliced
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            3
                                        </div>
                                        <div class="content">
                                            1 broccoli head, florets
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            4
                                        </div>
                                        <div class="content">
                                            2 carrots, julienned
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            5
                                        </div>
                                        <div class="content">
                                            3 tablespoons soy sauce
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            6
                                        </div>
                                        <div class="content">
                                            2 tablespoons oyster sauce
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            7
                                        </div>
                                        <div class="content">
                                            1 tablespoon sesame oil
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            8
                                        </div>
                                        <div class="content">
                                            2 cloves garlic, minced
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="instructions-tab-pane" role="tabpanel"
                                aria-labelledby="instructions-tab" tabindex="0">
                                <div class="nav-two">
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            1
                                        </div>
                                        <div class="content">
                                            Mix soy sauce, oyster sauce, and sesame oil for the sauce.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            2
                                        </div>
                                        <div class="content">
                                            Heat wok over high heat with oil. Cook chicken until golden, remove and set
                                            aside.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            3
                                        </div>
                                        <div class="content">
                                            Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            4
                                        </div>
                                        <div class="content">
                                            Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4
                                            minutes.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            5
                                        </div>
                                        <div class="content">
                                            Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nutrition-tab-pane" role="tabpanel"
                                aria-labelledby="nutrition-tab" tabindex="0">
                                <div class="nav-three">
                                    <div class="row g-4">
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-oraing d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-fire"></i>
                                                    </div>
                                                    <div class="content">
                                                        Calories
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    320 kcal
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-blue d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-dumbbell"></i>
                                                    </div>
                                                    <div class="content">
                                                        Protein
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    34g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-yellow d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-wheat-awn"></i>
                                                    </div>
                                                    <div class="content">
                                                        Carbohydrates
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    18g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-red d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-droplet"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fat
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    12g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-grean d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-seedling"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fiber
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    5g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-pink d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-cube"></i>
                                                    </div>
                                                    <div class="content">
                                                        Sodium
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    840mg
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="Chef-tab-pane" role="tabpanel" aria-labelledby="Chef-tab"
                                tabindex="0">
                                <div class="nav-four">
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Cut all ingredients before starting to cook
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Keep heat high for authentic stir-fry texture
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Don't overcrowd the wok or vegetables will steam
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Add cashews or peanuts for extra crunch
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-btn">
                            <button onclick="anotherRecipe()" class="bg-danger "> <i class="fa-solid fa-rotate"></i> Try Another Recipe</button>
                        </div>
                    </div>
                </div>
`

var two = `
        <div class="card-item-lf col-lg-5 shadow-lg rounded-5">
                    <div class="inner rounded-5">
                        <div class="box-image  position-relative overflow-hidden">
                            <div class="imge-2 ">
                            </div>
                            <div class="layer-one position-absolute ">
                                <i class="fa-solid fa-star me-1"></i>
                                <span class="one me-1">
                                    4.8
                                </span>
                                <span class="two">(445 reviews)</span>
                            </div>
                            <div
                                class="layer-two bg-white d-flex justify-content-around align-items-center  position-absolute ">
                                <div class="Prep-Time text-center">
                                    <i class="fa-solid fa-clock text-oraing"></i>
                                    <p class="one">Prep Time</p>
                                    <p class="two">20 min</p>
                                </div>
                                <div class="Cook-Time text-center">
                                    <i class="fa-solid fa-fire-burner text-red"></i>
                                    <p class="one">Cook Time</p>
                                    <p class="two">15 min</p>
                                </div>
                                <div class="Servings text-center">
                                    <i class="fa-solid fa-users text-blue"></i>
                                    <p class="one">Servings</p>
                                    <p class="two">2 people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item-rh col-lg-7 shadow-lg bg-white">
                    <div class="inner">
                        <div class="head d-flex justify-content-between align-items-center">
                            <div class="box-left">
                                <div class="box-head d-flex justify-content-start align-items-center gap-3">
                                    <div class="box-one box-grean ">
                                        Intermediate
                                    </div>
                                    <div class="box-two box-blue ">
                                        Asian
                                    </div>
                                </div>
                                <h3>Pad Thai</h3>
                                <p>
                                    Popular Thai stir-fried noodles with shrimp and peanuts
                                </p>
                            </div>
                            <div class="box-right d-flex justify-content-center align-items-center gap-2">
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                        <ul class="nav nav-tabs d-flex justify-content-around align-items-center" id="myTab"
                            role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab"
                                    data-bs-target="#ingredients-tab-pane" type="button" role="tab"
                                    aria-controls="ingredients-tab-pane" aria-selected="true"> <i
                                        class="fa-solid fa-list-check me-2"></i> Ingredients</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="instructions-tab" data-bs-toggle="tab"
                                    data-bs-target="#instructions-tab-pane" type="button" role="tab"
                                    aria-controls="instructions-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-book-open me-2"></i> Instructions</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nutrition-tab" data-bs-toggle="tab"
                                    data-bs-target="#nutrition-tab-pane" type="button" role="tab"
                                    aria-controls="nutrition-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-chart-pie me-2"></i>Nutrition</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Chef-tab" data-bs-toggle="tab"
                                    data-bs-target="#Chef-tab-pane" type="button" role="tab"
                                    aria-controls="Chef-tab-pane" aria-selected="false"><i
                                        class="fa-solid fa-lightbulb me-2"></i>Chef's Tips</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel"
                                aria-labelledby="ingredients-tab" tabindex="0">
                                <div class="nav-one">
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            1
                                        </div>
                                        <div class="content">
                                            200g rice noodles
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            2
                                        </div>
                                        <div class="content">
                                            200g shrimp, peeled
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            3
                                        </div>
                                        <div class="content">
                                            2 eggs
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            4
                                        </div>
                                        <div class="content">
                                            3 tablespoons tamarind paste
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            5
                                        </div>
                                        <div class="content">
                                            2 tablespoons fish sauce
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            6
                                        </div>
                                        <div class="content">
                                            1 tablespoon palm sugar
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            7
                                        </div>
                                        <div class="content">
                                            Bean sprouts
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            8
                                        </div>
                                        <div class="content">
                                            Crushed peanuts
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="instructions-tab-pane" role="tabpanel"
                                aria-labelledby="instructions-tab" tabindex="0">
                                <div class="nav-two">
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            1
                                        </div>
                                        <div class="content">
                                            Soak rice noodles in warm water for 30 minutes. Drain and set aside.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            2
                                        </div>
                                        <div class="content">
                                            Mix tamarind paste, fish sauce, and palm sugar to make the sauce.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            3
                                        </div>
                                        <div class="content">
                                            Heat wok over high heat. Scramble eggs and set aside.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            4
                                        </div>
                                        <div class="content">
                                            Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            5
                                        </div>
                                        <div class="content">
                                            Add scrambled eggs and bean sprouts. Toss everything together.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nutrition-tab-pane" role="tabpanel"
                                aria-labelledby="nutrition-tab" tabindex="0">
                                <div class="nav-three">
                                    <div class="row g-4">
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-oraing d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-fire"></i>
                                                    </div>
                                                    <div class="content">
                                                        Calories
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    540 kcal
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-blue d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-dumbbell"></i>
                                                    </div>
                                                    <div class="content">
                                                        Protein
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    32g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-yellow d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-wheat-awn"></i>
                                                    </div>
                                                    <div class="content">
                                                        Carbohydrates
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    62g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-red d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-droplet"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fat
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    16g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-grean d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-seedling"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fiber
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    4g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-pink d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-cube"></i>
                                                    </div>
                                                    <div class="content">
                                                        Sodium
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    1120mg
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="Chef-tab-pane" role="tabpanel" aria-labelledby="Chef-tab"
                                tabindex="0">
                                <div class="nav-four">
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Don't oversoak noodles or they'll be mushy
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Cook on high heat for authentic wok flavor
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Balance sweet, sour, and salty flavors
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Prepare all ingredients before starting to cook
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-btn">
                            <button onclick="anotherRecipe()" class="bg-danger "> <i class="fa-solid fa-rotate"></i> Try Another Recipe</button>
                        </div>
                    </div>
                </div>
`

var three = ` 
              <div class="card-item-lf col-lg-5 shadow-lg rounded-5">
                <div class="inner rounded-5">
                    <div class="box-image  position-relative overflow-hidden">
                        <div class="imge-3">
                        </div>
                        <div class="layer-one position-absolute ">
                            <i class="fa-solid fa-star me-1"></i>
                            <span class="one me-1">
                                4.6
                            </span>
                            <span class="two">(421 reviews)</span>
                        </div>
                        <div
                            class="layer-two bg-white d-flex justify-content-around align-items-center  position-absolute ">
                            <div class="Prep-Time text-center">
                                <i class="fa-solid fa-clock text-oraing"></i>
                                <p class="one">Prep Time</p>
                                <p class="two">15 min</p>
                            </div>
                            <div class="Cook-Time text-center">
                                <i class="fa-solid fa-fire-burner text-red"></i>
                                <p class="one">Cook Time</p>
                                <p class="two">20 min</p>
                            </div>
                            <div class="Servings text-center">
                                <i class="fa-solid fa-users text-blue"></i>
                                <p class="one">Servings</p>
                                <p class="two">4 people</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-item-rh col-lg-7 shadow-lg bg-white">
                <div class="inner">
                    <div class="head d-flex justify-content-between align-items-center">
                        <div class="box-left">
                            <div class="box-head d-flex justify-content-start align-items-center gap-3">
                                <div class="box-one box-grean ">
                                    Easy
                                </div>
                                <div class="box-two box-blue ">
                                    American
                                </div>
                            </div>
                            <h3>Classic Beef Burger</h3>
                            <p>
                                Juicy homemade burger with all the fixings
                            </p>
                        </div>
                        <div class="box-right d-flex justify-content-center align-items-center gap-2">
                            <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-bookmark"></i>
                            </div>
                            <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-share-nodes"></i>
                            </div>
                        </div>
                    </div>
                    <ul class="nav nav-tabs d-flex justify-content-around align-items-center" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab"
                                data-bs-target="#ingredients-tab-pane" type="button" role="tab"
                                aria-controls="ingredients-tab-pane" aria-selected="true"> <i
                                    class="fa-solid fa-list-check me-2"></i> Ingredients</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="instructions-tab" data-bs-toggle="tab"
                                data-bs-target="#instructions-tab-pane" type="button" role="tab"
                                aria-controls="instructions-tab-pane" aria-selected="false"> <i
                                    class="fa-solid fa-book-open me-2"></i> Instructions</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="nutrition-tab" data-bs-toggle="tab"
                                data-bs-target="#nutrition-tab-pane" type="button" role="tab"
                                aria-controls="nutrition-tab-pane" aria-selected="false"> <i
                                    class="fa-solid fa-chart-pie me-2"></i>Nutrition</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="Chef-tab" data-bs-toggle="tab" data-bs-target="#Chef-tab-pane"
                                type="button" role="tab" aria-controls="Chef-tab-pane" aria-selected="false"><i
                                    class="fa-solid fa-lightbulb me-2"></i>Chef's Tips</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel"
                            aria-labelledby="ingredients-tab" tabindex="0">
                            <div class="nav-one">
                                <div class="parent d-flex justify-content-start align-items-center gap-2">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                        1
                                    </div>
                                    <div class="content">
                                        500g ground beef (80/20)
                                    </div>
                                </div>
                                <div class="parent d-flex justify-content-start align-items-center gap-2">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                        2
                                    </div>
                                    <div class="content">
                                        4 burger buns
                                    </div>
                                </div>
                                <div class="parent d-flex justify-content-start align-items-center gap-2">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                        3
                                    </div>
                                    <div class="content">
                                        4 slices cheddar cheese
                                    </div>
                                </div>
                                <div class="parent d-flex justify-content-start align-items-center gap-2">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                        5
                                    </div>
                                    <div class="content">
                                        Lettuce leaves
                                    </div>
                                </div>
                                <div class="parent d-flex justify-content-start align-items-center gap-2">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                        6
                                    </div>
                                    <div class="content">
                                        Red onion, sliced
                                    </div>
                                </div>
                                <div class="parent d-flex justify-content-start align-items-center gap-2">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                        7
                                    </div>
                                    <div class="content">
                                        Pickles
                                    </div>
                                </div>
                                <div class="parent d-flex justify-content-start align-items-center gap-2">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                        8
                                    </div>
                                    <div class="content">
                                        Burger sauce or condiments
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="instructions-tab-pane" role="tabpanel"
                            aria-labelledby="instructions-tab" tabindex="0">
                            <div class="nav-two">
                                <div class="parent d-flex justify-content-start align-items-center gap-3">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                        1
                                    </div>
                                    <div class="content">
                                        Divide ground beef into 4 equal portions. Form into patties, making a small
                                        indent in the center.
                                    </div>
                                </div>
                                <div class="parent d-flex justify-content-start align-items-center gap-3">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                        2
                                    </div>
                                    <div class="content">
                                        Season patties generously with salt and pepper on both sides.
                                    </div>
                                </div>
                                <div class="parent d-flex justify-content-start align-items-center gap-3">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                        3
                                    </div>
                                    <div class="content">
                                        Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side
                                        for medium.
                                    </div>
                                </div>
                                <div class="parent d-flex justify-content-start align-items-center gap-3">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                        4
                                    </div>
                                    <div class="content">
                                        Add cheese slices in the last minute of cooking and cover to melt.
                                    </div>
                                </div>
                                <div class="parent d-flex justify-content-start align-items-center gap-3">
                                    <div
                                        class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                        5
                                    </div>
                                    <div class="content">
                                        Toast burger buns lightly on the grill or in a pan.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nutrition-tab-pane" role="tabpanel"
                            aria-labelledby="nutrition-tab" tabindex="0">
                            <div class="nav-three">
                                <div class="row g-4">
                                    <div class="cad-item col-md-6">
                                        <div class="inner d-flex justify-content-between align-items-center">
                                            <div class="left d-flex justify-content-start align-items-center gap-3">
                                                <div
                                                    class="icon box-oraing d-flex justify-content-center align-items-center rounded-3">
                                                    <i class="fa-solid fa-fire"></i>
                                                </div>
                                                <div class="content">
                                                    Calories
                                                </div>
                                            </div>
                                            <div class="right">
                                                650 kcal
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cad-item col-md-6">
                                        <div class="inner d-flex justify-content-between align-items-center">
                                            <div class="left d-flex justify-content-start align-items-center gap-3">
                                                <div
                                                    class="icon box-blue d-flex justify-content-center align-items-center rounded-3">
                                                    <i class="fa-solid fa-dumbbell"></i>
                                                </div>
                                                <div class="content">
                                                    Protein
                                                </div>
                                            </div>
                                            <div class="right">
                                                38g
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cad-item col-md-6">
                                        <div class="inner d-flex justify-content-between align-items-center">
                                            <div class="left d-flex justify-content-start align-items-center gap-3">
                                                <div
                                                    class="icon box-yellow d-flex justify-content-center align-items-center rounded-3">
                                                    <i class="fa-solid fa-wheat-awn"></i>
                                                </div>
                                                <div class="content">
                                                    Carbohydrates
                                                </div>
                                            </div>
                                            <div class="right">
                                                42g
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cad-item col-md-6">
                                        <div class="inner d-flex justify-content-between align-items-center">
                                            <div class="left d-flex justify-content-start align-items-center gap-3">
                                                <div
                                                    class="icon box-red d-flex justify-content-center align-items-center rounded-3">
                                                    <i class="fa-solid fa-droplet"></i>
                                                </div>
                                                <div class="content">
                                                    Fat
                                                </div>
                                            </div>
                                            <div class="right">
                                                35g
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cad-item col-md-6">
                                        <div class="inner d-flex justify-content-between align-items-center">
                                            <div class="left d-flex justify-content-start align-items-center gap-3">
                                                <div
                                                    class="icon box-grean d-flex justify-content-center align-items-center rounded-3">
                                                    <i class="fa-solid fa-seedling"></i>
                                                </div>
                                                <div class="content">
                                                    Fiber
                                                </div>
                                            </div>
                                            <div class="right">
                                                2g
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cad-item col-md-6">
                                        <div class="inner d-flex justify-content-between align-items-center">
                                            <div class="left d-flex justify-content-start align-items-center gap-3">
                                                <div
                                                    class="icon box-pink d-flex justify-content-center align-items-center rounded-3">
                                                    <i class="fa-solid fa-cube"></i>
                                                </div>
                                                <div class="content">
                                                    Sodium
                                                </div>
                                            </div>
                                            <div class="right">
                                                920mg
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="Chef-tab-pane" role="tabpanel" aria-labelledby="Chef-tab"
                            tabindex="0">
                            <div class="nav-four">
                                <div class="parent">
                                    <i class="fa-solid fa-circle-check m-2"></i>
                                    Don't press down on burgers while cooking - keeps them juicy
                                </div>
                                <div class="parent">
                                    <i class="fa-solid fa-circle-check m-2"></i>
                                    Make indent in center to prevent burger from puffing up
                                </div>
                                <div class="parent">
                                    <i class="fa-solid fa-circle-check m-2"></i>
                                    Let patties rest for 2-3 minutes before serving
                                </div>
                                <div class="parent">
                                    <i class="fa-solid fa-circle-check m-2"></i>
                                    Toast buns for better texture and flavor
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-btn">
                        <button onclick="anotherRecipe()" class="bg-danger "> <i class="fa-solid fa-rotate"></i> Try
                            Another Recipe</button>
                    </div>
                </div>
            </div>

`

var four = `
            <div class="card-item-lf col-lg-5 shadow-lg rounded-5">
                    <div class="inner rounded-5">
                        <div class="box-image  position-relative overflow-hidden">
                            <div class="imge-4">
                            </div>
                            <div class="layer-one position-absolute ">
                                <i class="fa-solid fa-star me-1"></i>
                                <span class="one me-1">
                                    4.5
                                </span>
                                <span class="two">(189 reviews)</span>
                            </div>
                            <div
                                class="layer-two bg-white d-flex justify-content-around align-items-center  position-absolute ">
                                <div class="Prep-Time text-center">
                                    <i class="fa-solid fa-clock text-oraing"></i>
                                    <p class="one">Prep Time</p>
                                    <p class="two">10 min</p>
                                </div>
                                <div class="Cook-Time text-center">
                                    <i class="fa-solid fa-fire-burner text-red"></i>
                                    <p class="one">Cook Time</p>
                                    <p class="two">5 min</p>
                                </div>
                                <div class="Servings text-center">
                                    <i class="fa-solid fa-users text-blue"></i>
                                    <p class="one">Servings</p>
                                    <p class="two">2 people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item-rh col-lg-7 shadow-lg bg-white">
                    <div class="inner">
                        <div class="head d-flex justify-content-between align-items-center">
                            <div class="box-left">
                                <div class="box-head d-flex justify-content-start align-items-center gap-3">
                                    <div class="box-one box-grean ">
                                        Easy
                                    </div>
                                    <div class="box-two box-blue ">
                                        Italian
                                    </div>
                                </div>
                                <h3>Caprese Sandwich</h3>
                                <p>
                                    Fresh Italian sandwich with mozzarella, tomato, and basil
                                </p>
                            </div>
                            <div class="box-right d-flex justify-content-center align-items-center gap-2">
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                        <ul class="nav nav-tabs d-flex justify-content-around align-items-center" id="myTab"
                            role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab"
                                    data-bs-target="#ingredients-tab-pane" type="button" role="tab"
                                    aria-controls="ingredients-tab-pane" aria-selected="true"> <i
                                        class="fa-solid fa-list-check me-2"></i> Ingredients</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="instructions-tab" data-bs-toggle="tab"
                                    data-bs-target="#instructions-tab-pane" type="button" role="tab"
                                    aria-controls="instructions-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-book-open me-2"></i> Instructions</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nutrition-tab" data-bs-toggle="tab"
                                    data-bs-target="#nutrition-tab-pane" type="button" role="tab"
                                    aria-controls="nutrition-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-chart-pie me-2"></i>Nutrition</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Chef-tab" data-bs-toggle="tab"
                                    data-bs-target="#Chef-tab-pane" type="button" role="tab"
                                    aria-controls="Chef-tab-pane" aria-selected="false"><i
                                        class="fa-solid fa-lightbulb me-2"></i>Chef's Tips</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel"
                                aria-labelledby="ingredients-tab" tabindex="0">
                                <div class="nav-one">
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            1
                                        </div>
                                        <div class="content">
                                            1 ciabatta bread
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            2
                                        </div>
                                        <div class="content">
                                            200g fresh mozzarella, sliced
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            3
                                        </div>
                                        <div class="content">
                                            2 large tomatoes, sliced
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            4
                                        </div>
                                        <div class="content">
                                            Fresh basil leaves
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            5
                                        </div>
                                        <div class="content">
                                            3 tablespoons pesto
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            6
                                        </div>
                                        <div class="content">
                                            2 tablespoons balsamic glaze
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            7
                                        </div>
                                        <div class="content">
                                            Olive oil
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            8
                                        </div>
                                        <div class="content">
                                            Salt and pepper
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="instructions-tab-pane" role="tabpanel"
                                aria-labelledby="instructions-tab" tabindex="0">
                                <div class="nav-two">
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            1
                                        </div>
                                        <div class="content">
                                            Slice ciabatta bread in half horizontally.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            2
                                        </div>
                                        <div class="content">
                                            Toast bread lightly until just crispy.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            3
                                        </div>
                                        <div class="content">
                                            Spread pesto on both sides of bread.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            4
                                        </div>
                                        <div class="content">
                                            Layer mozzarella slices, tomato slices, and fresh basil leaves.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            5
                                        </div>
                                        <div class="content">
                                            Drizzle with olive oil and balsamic glaze. Season with salt and pepper.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nutrition-tab-pane" role="tabpanel"
                                aria-labelledby="nutrition-tab" tabindex="0">
                                <div class="nav-three">
                                    <div class="row g-4">
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-oraing d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-fire"></i>
                                                    </div>
                                                    <div class="content">
                                                        Calories
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    480 kcal
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-blue d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-dumbbell"></i>
                                                    </div>
                                                    <div class="content">
                                                        Protein
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    22g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-yellow d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-wheat-awn"></i>
                                                    </div>
                                                    <div class="content">
                                                        Carbohydrates
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    48g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-red d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-droplet"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fat
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    22g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-grean d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-seedling"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fiber
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    3g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-pink d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-cube"></i>
                                                    </div>
                                                    <div class="content">
                                                        Sodium
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    680mg
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="Chef-tab-pane" role="tabpanel" aria-labelledby="Chef-tab"
                                tabindex="0">
                                <div class="nav-four">
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Use ripe, in-season tomatoes for best flavor
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Buffalo mozzarella is traditional but harder to slice
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Toast bread lightly - not too crispy
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Add prosciutto or salami for a heartier sandwich
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-btn">
                            <button onclick="anotherRecipe()" class="bg-danger "> <i class="fa-solid fa-rotate"></i> Try
                                Another Recipe</button>
                        </div>
                    </div>
                </div>
`

var five = `
            <div class="card-item-lf col-lg-5 shadow-lg rounded-5">
                    <div class="inner rounded-5">
                        <div class="box-image  position-relative overflow-hidden">
                            <div class="imge-5">
                            </div>
                            <div class="layer-one position-absolute ">
                                <i class="fa-solid fa-star me-1"></i>
                                <span class="one me-1">
                                    4.7
                                </span>
                                <span class="two">(367 reviews)</span>
                            </div>
                            <div
                                class="layer-two bg-white d-flex justify-content-around align-items-center  position-absolute ">
                                <div class="Prep-Time text-center">
                                    <i class="fa-solid fa-clock text-oraing"></i>
                                    <p class="one">Prep Time</p>
                                    <p class="two">15 min</p>
                                </div>
                                <div class="Cook-Time text-center">
                                    <i class="fa-solid fa-fire-burner text-red"></i>
                                    <p class="one">Cook Time</p>
                                    <p class="two">20 min</p>
                                </div>
                                <div class="Servings text-center">
                                    <i class="fa-solid fa-users text-blue"></i>
                                    <p class="one">Servings</p>
                                    <p class="two">2 people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item-rh col-lg-7 shadow-lg bg-white">
                    <div class="inner">
                        <div class="head d-flex justify-content-between align-items-center">
                            <div class="box-left">
                                <div class="box-head d-flex justify-content-start align-items-center gap-3">
                                    <div class="box-one box-grean ">
                                        Easy
                                    </div>
                                    <div class="box-two box-blue ">
                                        Asian
                                    </div>
                                </div>
                                <h3>Teriyaki Chicken Bowl</h3>
                                <p>
                                    Sweet and savory chicken over rice with vegetables
                                </p>
                            </div>
                            <div class="box-right d-flex justify-content-center align-items-center gap-2">
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                        <ul class="nav nav-tabs d-flex justify-content-around align-items-center" id="myTab"
                            role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab"
                                    data-bs-target="#ingredients-tab-pane" type="button" role="tab"
                                    aria-controls="ingredients-tab-pane" aria-selected="true"> <i
                                        class="fa-solid fa-list-check me-2"></i> Ingredients</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="instructions-tab" data-bs-toggle="tab"
                                    data-bs-target="#instructions-tab-pane" type="button" role="tab"
                                    aria-controls="instructions-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-book-open me-2"></i> Instructions</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nutrition-tab" data-bs-toggle="tab"
                                    data-bs-target="#nutrition-tab-pane" type="button" role="tab"
                                    aria-controls="nutrition-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-chart-pie me-2"></i>Nutrition</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Chef-tab" data-bs-toggle="tab"
                                    data-bs-target="#Chef-tab-pane" type="button" role="tab"
                                    aria-controls="Chef-tab-pane" aria-selected="false"><i
                                        class="fa-solid fa-lightbulb me-2"></i>Chef's Tips</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel"
                                aria-labelledby="ingredients-tab" tabindex="0">
                                <div class="nav-one">
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            1
                                        </div>
                                        <div class="content">
                                            400g chicken thighs, sliced
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            2
                                        </div>
                                        <div class="content">
                                            1/2 cup teriyaki sauce
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            3
                                        </div>
                                        <div class="content">
                                            2 cups cooked rice
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            4
                                        </div>
                                        <div class="content">
                                            1 broccoli head, florets
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            5
                                        </div>
                                        <div class="content">
                                            1 carrot, julienned
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            6
                                        </div>
                                        <div class="content">
                                            Sesame seeds
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            7
                                        </div>
                                        <div class="content">
                                            Green onions, sliced
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            8
                                        </div>
                                        <div class="content">
                                            1 tablespoon sesame oil
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="instructions-tab-pane" role="tabpanel"
                                aria-labelledby="instructions-tab" tabindex="0">
                                <div class="nav-two">
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            1
                                        </div>
                                        <div class="content">
                                            Heat sesame oil in a pan. Cook chicken until browned on all sides.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            2
                                        </div>
                                        <div class="content">
                                            Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            3
                                        </div>
                                        <div class="content">
                                            Meanwhile, steam broccoli and carrots until tender-crisp.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            4
                                        </div>
                                        <div class="content">
                                            Divide rice between bowls.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            5
                                        </div>
                                        <div class="content">
                                            Top with teriyaki chicken and steamed vegetables.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nutrition-tab-pane" role="tabpanel"
                                aria-labelledby="nutrition-tab" tabindex="0">
                                <div class="nav-three">
                                    <div class="row g-4">
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-oraing d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-fire"></i>
                                                    </div>
                                                    <div class="content">
                                                        Calories
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    540 kcal
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-blue d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-dumbbell"></i>
                                                    </div>
                                                    <div class="content">
                                                        Protein
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    42g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-yellow d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-wheat-awn"></i>
                                                    </div>
                                                    <div class="content">
                                                        Carbohydrates
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    58g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-red d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-droplet"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fat
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    14g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-grean d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-seedling"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fiber
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    4g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-pink d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-cube"></i>
                                                    </div>
                                                    <div class="content">
                                                        Sodium
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    1240mg
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="Chef-tab-pane" role="tabpanel" aria-labelledby="Chef-tab"
                                tabindex="0">
                                <div class="nav-four">
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Use chicken thighs for juicier meat
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Make homemade teriyaki sauce for better flavor control
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Add edamame for extra protein
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Meal prep by cooking rice and chicken ahead
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-btn">
                            <button onclick="anotherRecipe()" class="bg-danger "> <i class="fa-solid fa-rotate"></i> Try
                                Another Recipe</button>
                        </div>
                    </div>
            </div>

`

var sex = `
        <div class="card-item-lf col-lg-5 shadow-lg rounded-5">
                    <div class="inner rounded-5">
                        <div class="box-image  position-relative overflow-hidden">
                            <div class="imge-6">
                            </div>
                            <div class="layer-one position-absolute ">
                                <i class="fa-solid fa-star me-1"></i>
                                <span class="one me-1">
                                    4.4
                                </span>
                                <span class="two">(198 reviews)</span>
                            </div>
                            <div
                                class="layer-two bg-white d-flex justify-content-around align-items-center  position-absolute ">
                                <div class="Prep-Time text-center">
                                    <i class="fa-solid fa-clock text-oraing"></i>
                                    <p class="one">Prep Time</p>
                                    <p class="two">15 min</p>
                                </div>
                                <div class="Cook-Time text-center">
                                    <i class="fa-solid fa-fire-burner text-red"></i>
                                    <p class="one">Cook Time</p>
                                    <p class="two">0 min</p>
                                </div>
                                <div class="Servings text-center">
                                    <i class="fa-solid fa-users text-blue"></i>
                                    <p class="one">Servings</p>
                                    <p class="two">2 people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item-rh col-lg-7 shadow-lg bg-white">
                    <div class="inner">
                        <div class="head d-flex justify-content-between align-items-center">
                            <div class="box-left">
                                <div class="box-head d-flex justify-content-start align-items-center gap-3">
                                    <div class="box-one box-grean ">
                                        Easy
                                    </div>
                                    <div class="box-two box-blue ">
                                        Mediterranean
                                    </div>
                                </div>
                                <h3>Caesar Salad</h3>
                                <p>
                                    Classic salad with crispy romaine and creamy dressing
                                </p>
                            </div>
                            <div class="box-right d-flex justify-content-center align-items-center gap-2">
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                        <ul class="nav nav-tabs d-flex justify-content-around align-items-center" id="myTab"
                            role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab"
                                    data-bs-target="#ingredients-tab-pane" type="button" role="tab"
                                    aria-controls="ingredients-tab-pane" aria-selected="true"> <i
                                        class="fa-solid fa-list-check me-2"></i> Ingredients</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="instructions-tab" data-bs-toggle="tab"
                                    data-bs-target="#instructions-tab-pane" type="button" role="tab"
                                    aria-controls="instructions-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-book-open me-2"></i> Instructions</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nutrition-tab" data-bs-toggle="tab"
                                    data-bs-target="#nutrition-tab-pane" type="button" role="tab"
                                    aria-controls="nutrition-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-chart-pie me-2"></i>Nutrition</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Chef-tab" data-bs-toggle="tab"
                                    data-bs-target="#Chef-tab-pane" type="button" role="tab"
                                    aria-controls="Chef-tab-pane" aria-selected="false"><i
                                        class="fa-solid fa-lightbulb me-2"></i>Chef's Tips</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel"
                                aria-labelledby="ingredients-tab" tabindex="0">
                                <div class="nav-one">
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            1
                                        </div>
                                        <div class="content">
                                            1 large romaine lettuce
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            2
                                        </div>
                                        <div class="content">
                                            1/2 cup Caesar dressing
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            3
                                        </div>
                                        <div class="content">
                                            1/2 cup parmesan cheese, shaved
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            4
                                        </div>
                                        <div class="content">
                                            1 cup croutons
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            5
                                        </div>
                                        <div class="content">
                                            2 anchovy fillets (optional)
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            6
                                        </div>
                                        <div class="content">
                                            Lemon wedges
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            7
                                        </div>
                                        <div class="content">
                                            Black pepper
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="instructions-tab-pane" role="tabpanel"
                                aria-labelledby="instructions-tab" tabindex="0">
                                <div class="nav-two">
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            1
                                        </div>
                                        <div class="content">
                                            Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            2
                                        </div>
                                        <div class="content">
                                            Place lettuce in a large salad bowl.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            3
                                        </div>
                                        <div class="content">
                                            Add Caesar dressing and toss until evenly coated.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            4
                                        </div>
                                        <div class="content">
                                            Add croutons and half the parmesan cheese. Toss gently.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            5
                                        </div>
                                        <div class="content">
                                            Top with remaining parmesan shavings and anchovies if using.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nutrition-tab-pane" role="tabpanel"
                                aria-labelledby="nutrition-tab" tabindex="0">
                                <div class="nav-three">
                                    <div class="row g-4">
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-oraing d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-fire"></i>
                                                    </div>
                                                    <div class="content">
                                                        Calories
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    320 kcal
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-blue d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-dumbbell"></i>
                                                    </div>
                                                    <div class="content">
                                                        Protein
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    12g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-yellow d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-wheat-awn"></i>
                                                    </div>
                                                    <div class="content">
                                                        Carbohydrates
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    18g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-red d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-droplet"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fat
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    22g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-grean d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-seedling"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fiber
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    3g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-pink d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-cube"></i>
                                                    </div>
                                                    <div class="content">
                                                        Sodium
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    680mg
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="Chef-tab-pane" role="tabpanel" aria-labelledby="Chef-tab"
                                tabindex="0">
                                <div class="nav-four">
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Use cold, crisp lettuce for best texture
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Make homemade croutons for better flavor
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Add grilled chicken for a complete meal
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Don't dress salad until ready to serve
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-btn">
                            <button onclick="anotherRecipe()" class="bg-danger "> <i class="fa-solid fa-rotate"></i> Try
                                Another Recipe</button>
                        </div>
                    </div>
                </div>

`

var seven = `
        <div class="card-item-lf col-lg-5 shadow-lg rounded-5">
                    <div class="inner rounded-5">
                        <div class="box-image  position-relative overflow-hidden">
                            <div class="imge-7">
                            </div>
                            <div class="layer-one position-absolute ">
                                <i class="fa-solid fa-star me-1"></i>
                                <span class="one me-1">
                                    4.8
                                </span>
                                <span class="two">(356 reviews)</span>
                            </div>
                            <div
                                class="layer-two bg-white d-flex justify-content-around align-items-center  position-absolute ">
                                <div class="Prep-Time text-center">
                                    <i class="fa-solid fa-clock text-oraing"></i>
                                    <p class="one">Prep Time</p>
                                    <p class="two">10 min</p>
                                </div>
                                <div class="Cook-Time text-center">
                                    <i class="fa-solid fa-fire-burner text-red"></i>
                                    <p class="one">Cook Time</p>
                                    <p class="two">15 min</p>
                                </div>
                                <div class="Servings text-center">
                                    <i class="fa-solid fa-users text-blue"></i>
                                    <p class="one">Servings</p>
                                    <p class="two">2 people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item-rh col-lg-7 shadow-lg bg-white">
                    <div class="inner">
                        <div class="head d-flex justify-content-between align-items-center">
                            <div class="box-left">
                                <div class="box-head d-flex justify-content-start align-items-center gap-3">
                                    <div class="box-one box-grean ">
                                        Easy
                                    </div>
                                    <div class="box-two box-blue ">
                                        Seafood
                                    </div>
                                </div>
                                <h3>Shrimp Scampi</h3>
                                <p>
                                    Garlicky shrimp in white wine butter sauce
                                </p>
                            </div>
                            <div class="box-right d-flex justify-content-center align-items-center gap-2">
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                        <ul class="nav nav-tabs d-flex justify-content-around align-items-center" id="myTab"
                            role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab"
                                    data-bs-target="#ingredients-tab-pane" type="button" role="tab"
                                    aria-controls="ingredients-tab-pane" aria-selected="true"> <i
                                        class="fa-solid fa-list-check me-2"></i> Ingredients</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="instructions-tab" data-bs-toggle="tab"
                                    data-bs-target="#instructions-tab-pane" type="button" role="tab"
                                    aria-controls="instructions-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-book-open me-2"></i> Instructions</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nutrition-tab" data-bs-toggle="tab"
                                    data-bs-target="#nutrition-tab-pane" type="button" role="tab"
                                    aria-controls="nutrition-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-chart-pie me-2"></i>Nutrition</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Chef-tab" data-bs-toggle="tab"
                                    data-bs-target="#Chef-tab-pane" type="button" role="tab"
                                    aria-controls="Chef-tab-pane" aria-selected="false"><i
                                        class="fa-solid fa-lightbulb me-2"></i>Chef's Tips</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel"
                                aria-labelledby="ingredients-tab" tabindex="0">
                                <div class="nav-one">
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            1
                                        </div>
                                        <div class="content">
                                            400g large shrimp, peeled
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            2
                                        </div>
                                        <div class="content">
                                            300g linguine pasta
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            3
                                        </div>
                                        <div class="content">
                                            6 cloves garlic, minced
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            4
                                        </div>
                                        <div class="content">
                                            1/2 cup white wine
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            5
                                        </div>
                                        <div class="content">
                                            4 tablespoons butter
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            6
                                        </div>
                                        <div class="content">
                                            2 tablespoons olive oil
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            7
                                        </div>
                                        <div class="content">
                                            Fresh parsley, chopped
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            8
                                        </div>
                                        <div class="content">
                                            Lemon juice and zest
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="instructions-tab-pane" role="tabpanel"
                                aria-labelledby="instructions-tab" tabindex="0">
                                <div class="nav-two">
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            1
                                        </div>
                                        <div class="content">
                                            Cook linguine according to package directions. Reserve 1 cup pasta water.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            2
                                        </div>
                                        <div class="content">
                                            Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            3
                                        </div>
                                        <div class="content">
                                            Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            4
                                        </div>
                                        <div class="content">
                                            Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            5
                                        </div>
                                        <div class="content">
                                            Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nutrition-tab-pane" role="tabpanel"
                                aria-labelledby="nutrition-tab" tabindex="0">
                                <div class="nav-three">
                                    <div class="row g-4">
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-oraing d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-fire"></i>
                                                    </div>
                                                    <div class="content">
                                                        Calories
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    520 kcal
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-blue d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-dumbbell"></i>
                                                    </div>
                                                    <div class="content">
                                                        Protein
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    36g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-yellow d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-wheat-awn"></i>
                                                    </div>
                                                    <div class="content">
                                                        Carbohydrates
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    54g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-red d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-droplet"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fat
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    18g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-grean d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-seedling"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fiber
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    3g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-pink d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-cube"></i>
                                                    </div>
                                                    <div class="content">
                                                        Sodium
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    620mg
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="Chef-tab-pane" role="tabpanel" aria-labelledby="Chef-tab"
                                tabindex="0">
                                <div class="nav-four">
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Don't overcook shrimp - they cook very quickly
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Use good quality white wine for best flavor
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Toss pasta in sauce for maximum flavor absorption
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Add extra lemon for bright, fresh taste
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-btn">
                            <button onclick="anotherRecipe()" class="bg-danger "> <i class="fa-solid fa-rotate"></i> Try
                                Another Recipe</button>
                        </div>
                    </div>
                </div>
`

var eight = `
          <div class="card-item-lf col-lg-5 shadow-lg rounded-5">
                    <div class="inner rounded-5">
                        <div class="box-image  position-relative overflow-hidden">
                            <div class="imge-8">
                            </div>
                            <div class="layer-one position-absolute ">
                                <i class="fa-solid fa-star me-1"></i>
                                <span class="one me-1">
                                    4.9
                                </span>
                                <span class="two">(187 reviews)</span>
                            </div>
                            <div
                                class="layer-two bg-white d-flex justify-content-around align-items-center  position-absolute ">
                                <div class="Prep-Time text-center">
                                    <i class="fa-solid fa-clock text-oraing"></i>
                                    <p class="one">Prep Time</p>
                                    <p class="two">10 min</p>
                                </div>
                                <div class="Cook-Time text-center">
                                    <i class="fa-solid fa-fire-burner text-red"></i>
                                    <p class="one">Cook Time</p>
                                    <p class="two">15 min</p>
                                </div>
                                <div class="Servings text-center">
                                    <i class="fa-solid fa-users text-blue"></i>
                                    <p class="one">Servings</p>
                                    <p class="two">2 people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item-rh col-lg-7 shadow-lg bg-white">
                    <div class="inner">
                        <div class="head d-flex justify-content-between align-items-center">
                            <div class="box-left">
                                <div class="box-head d-flex justify-content-start align-items-center gap-3">
                                    <div class="box-one box-grean ">
                                        Easy
                                    </div>
                                    <div class="box-two box-blue ">
                                        Seafood
                                    </div>
                                </div>
                                <h3>Honey Garlic Salmon</h3>
                                <p>
                                    Pan-seared salmon with a sweet and savory glaze
                                </p>
                            </div>
                            <div class="box-right d-flex justify-content-center align-items-center gap-2">
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="icon box-oraing d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                        <ul class="nav nav-tabs d-flex justify-content-around align-items-center" id="myTab"
                            role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab"
                                    data-bs-target="#ingredients-tab-pane" type="button" role="tab"
                                    aria-controls="ingredients-tab-pane" aria-selected="true"> <i
                                        class="fa-solid fa-list-check me-2"></i> Ingredients</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="instructions-tab" data-bs-toggle="tab"
                                    data-bs-target="#instructions-tab-pane" type="button" role="tab"
                                    aria-controls="instructions-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-book-open me-2"></i> Instructions</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nutrition-tab" data-bs-toggle="tab"
                                    data-bs-target="#nutrition-tab-pane" type="button" role="tab"
                                    aria-controls="nutrition-tab-pane" aria-selected="false"> <i
                                        class="fa-solid fa-chart-pie me-2"></i>Nutrition</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Chef-tab" data-bs-toggle="tab"
                                    data-bs-target="#Chef-tab-pane" type="button" role="tab"
                                    aria-controls="Chef-tab-pane" aria-selected="false"><i
                                        class="fa-solid fa-lightbulb me-2"></i>Chef's Tips</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel"
                                aria-labelledby="ingredients-tab" tabindex="0">
                                <div class="nav-one">
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            1
                                        </div>
                                        <div class="content">
                                            2 salmon fillets (6oz each)
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            2
                                        </div>
                                        <div class="content">
                                            3 tablespoons honey
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            3
                                        </div>
                                        <div class="content">
                                            2 tablespoons soy sauce
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            4
                                        </div>
                                        <div class="content">
                                            4 cloves garlic, minced
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            5
                                        </div>
                                        <div class="content">
                                            1 tablespoon olive oil
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            6
                                        </div>
                                        <div class="content">
                                            1 teaspoon fresh ginger, grated
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            7
                                        </div>
                                        <div class="content">
                                            Sesame seeds for garnish
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-2">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center rounded-circle text-white">
                                            8
                                        </div>
                                        <div class="content">
                                            Green onions, sliced
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="instructions-tab-pane" role="tabpanel"
                                aria-labelledby="instructions-tab" tabindex="0">
                                <div class="nav-two">
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            1
                                        </div>
                                        <div class="content">
                                            Pat salmon fillets dry with paper towels. Season with salt and pepper.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            2
                                        </div>
                                        <div class="content">
                                            In a small bowl, whisk together honey, soy sauce, minced garlic, and grated
                                            ginger.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            3
                                        </div>
                                        <div class="content">
                                            Heat olive oil in a large skillet over medium-high heat.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            4
                                        </div>
                                        <div class="content">
                                            Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until
                                            golden.
                                        </div>
                                    </div>
                                    <div class="parent d-flex justify-content-start align-items-center gap-3">
                                        <div
                                            class="number bg-oraing d-flex justify-content-center align-items-center text-white rounded-4">
                                            5
                                        </div>
                                        <div class="content">
                                            Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5
                                            minutes.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nutrition-tab-pane" role="tabpanel"
                                aria-labelledby="nutrition-tab" tabindex="0">
                                <div class="nav-three">
                                    <div class="row g-4">
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-oraing d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-fire"></i>
                                                    </div>
                                                    <div class="content">
                                                        Calories
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    380 kcal
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-blue d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-dumbbell"></i>
                                                    </div>
                                                    <div class="content">
                                                        Protein
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    35g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-yellow d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-wheat-awn"></i>
                                                    </div>
                                                    <div class="content">
                                                        Carbohydrates
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    28g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-red d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-droplet"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fat
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    14g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-grean d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-seedling"></i>
                                                    </div>
                                                    <div class="content">
                                                        Fiber
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    0g
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cad-item col-md-6">
                                            <div class="inner d-flex justify-content-between align-items-center">
                                                <div class="left d-flex justify-content-start align-items-center gap-3">
                                                    <div
                                                        class="icon box-pink d-flex justify-content-center align-items-center rounded-3">
                                                        <i class="fa-solid fa-cube"></i>
                                                    </div>
                                                    <div class="content">
                                                        Sodium
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    720mg
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="Chef-tab-pane" role="tabpanel" aria-labelledby="Chef-tab"
                                tabindex="0">
                                <div class="nav-four">
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Don't overcook salmon - it should be slightly pink in the center
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Use wild-caught salmon for best flavor and nutrition
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Let the sauce caramelize slightly for deeper flavor
                                    </div>
                                    <div class="parent">
                                        <i class="fa-solid fa-circle-check m-2"></i>
                                        Pair with steamed broccoli or asparagus for a complete meal
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-btn-1 ">
                            <button onclick="anotherRecipe()" class="bg-danger "> <i class="fa-solid fa-rotate"></i> Try
                                Another Recipe</button>
                        </div>
                    </div>
                </div>


`

var index = [one , two , three , four, five , sex , seven , eight];


var repeatValue = null;


function anotherRecipe() {
    var x;

    do {
        x = index[Math.floor(Math.random() * index.length)];
    }
    while (x == repeatValue);

    repeatValue = x;


    document.getElementById('mainRow').innerHTML = x;
}
