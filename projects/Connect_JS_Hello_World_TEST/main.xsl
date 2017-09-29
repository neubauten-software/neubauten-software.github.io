<?xml version="1.0" encoding="utf-8"?>
<html xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xsl:version="1.0">
    <xsl:template match="Application">
        <html>
            <xsl:apply-templates select="Design"/>
        </html>
    </xsl:template>
    <button>
        <xsl:attribute name="onclick">
            <xsl:value-of select="ClickEvent"/>
        </xsl:attribute>
        <xsl:value-of select="Text"/>
    </button>
</html>
