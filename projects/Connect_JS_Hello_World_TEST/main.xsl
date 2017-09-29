<?xml version="1.0" encoding="utf-8"?>
<html xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xsl:version="1.0">
<body>
    <button target="_blank">
        <xsl:attribute name="href">
            <xsl:value-of select="Button/@GoTo"/>
        </xsl:attribute>
        <xsl:attribute name="title">
            <xsl:value-of select="Button"/>
        </xsl:attribute>
        <xsl:value-of select="Button"/>
    </button>
</body>
</html>
