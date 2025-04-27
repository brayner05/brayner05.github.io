SASS = sass

SASS_DIR 		= sass
BUILD_DIR 		= build/css

SASS_FILES		= $(wildcard $(SASS_DIR)/*.sass)
SCSS_FILES		= $(wildcard $(SASS_DIR)/*.scss)

CSS_FILES 		= 	$(patsubst $(SASS_DIR)/%.sass,$(BUILD_DIR)/%.css,$(SASS_FILES)) \
					$(patsubst $(SASS_DIR)/%.scss,$(BUILD_DIR)/%.css,$(SCSS_FILES))


all: $(CSS_FILES)


$(BUILD_DIR)/%.css: $(SASS_DIR)/%.sass
	mkdir -p $(BUILD_DIR)
	$(SASS) $< $@


$(BUILD_DIR)/%.css: $(SASS_DIR)/%.scss
	mkdir -p $(BUILD_DIR)
	$(SASS) $< $@


clean:
	rm -rf build

.PHONY: clean